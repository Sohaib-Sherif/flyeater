/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
 * - Run `npm run deploy` to publish your Worker
 *
 * Bind resources to your Worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { env } from 'cloudflare:workers';
import { OrganizationsApi, OrgMachine } from '@flysdk/api';
import { Configuration } from '@flysdk/configuration';


export default {
  async scheduled(event): Promise<void> {
    console.log(`Cron triggered at ${event.cron}`);
    await checkMachineStates();
  }
} satisfies ExportedHandler<Env>;

// Check periodically if any machines changed to "started" state
async function checkMachineStates() {
  // fetch machines and send notification if something is going wrong because I need to know
  let machines: OrgMachine[];
  try {
    machines = await listMachines();
  } catch (error) {
    await sendNotificationViaNTFY("Error: Failed to fetch Fly.io machines. Check Worker logs.")
    return;
  }

  // get the json from key-value store
  const kvJSONResult = await env.FLY_MACHINE_STATE.get("states_of_machines");
  // parse the json
  let storedStatesOfMachines: OrgMachineState[] = kvJSONResult ? JSON.parse(kvJSONResult) : [];

  // we have an empty store, let's populate it (happens first time only [I believe haha])
  if (!storedStatesOfMachines.length) {
    machines.forEach(machine => {
      storedStatesOfMachines = [
        ...storedStatesOfMachines,
        {
          id: machine.id,
          app_name: machine.app_name,
          state: machine.state,
          updated_at: machine.updated_at,
          last_notification_sent_at: undefined
        }
      ];
    });
  }

  // map the json into a dictionary for easy use
  const mappedStoredStatesOfMachines = new Map<string, OrgMachineState>(
    storedStatesOfMachines.map((machine: OrgMachineState) => [machine.id ?? 'saywhat', machine])
  );

  for(const machine of machines) {
    if (!machine || !machine.id) {
      return;
    }

    const storedMachineState = mappedStoredStatesOfMachines.get(machine.id);

    if (!storedMachineState) {
      console.log("not found?!")
      return;
    }

    if (machine.state === 'started' && storedMachineState.state !== 'started') {
      await sendNotificationViaNTFY(
        `Machine ${machine.app_name} (${machine.name}) has started`
      );

      mappedStoredStatesOfMachines.set(machine.id, {
        id: machine.id,
        app_name: machine.app_name,
        state: 'started',
        updated_at: machine.updated_at,
        last_notification_sent_at: new Date().toISOString()
      });
    } else {
      // update state in store to reflect upstream state yadda yadda
      mappedStoredStatesOfMachines.set(machine.id, {
        id: machine.id,
        app_name: machine.app_name,
        state: machine.state,
        updated_at: machine.updated_at,
        last_notification_sent_at: storedMachineState.last_notification_sent_at
      })
    }
  };

  await env.FLY_MACHINE_STATE.put('states_of_machines', JSON.stringify(Array.from(mappedStoredStatesOfMachines.values())));
}

interface OrgMachineState extends OrgMachine {
  last_notification_sent_at?: string;
}

async function listMachines(): Promise<OrgMachine[]> {
  const configuration = new Configuration({
    baseOptions: {
      headers: {
        Authorization: `Bearer ${env.FLY_API_TOKEN}`
      }
    },
  });
  const organizationsApiInstance = new OrganizationsApi(configuration);

  try {
    const response = await organizationsApiInstance?.machinesOrgList('personal');
    console.log(response?.status, 'org machines fetched');
    return response?.data.machines ?? [];
  } catch (error) {
    console.log('Error fetching org machines', error)
    throw error;
  }
}

async function sendNotificationViaNTFY(message: string): Promise<void> {
  try {
    const response = await fetch(env.NTFY_TOPIC, {
      method: 'POST',
      body: message
    });
    if (!response.ok) {
      console.error(`ntfy notification failed: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending ntfy notification:', error);
  }
}
