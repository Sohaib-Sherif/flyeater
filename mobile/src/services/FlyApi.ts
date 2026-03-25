import { MachinesApi, OrganizationsApi } from "@flysdk/api";
import { Configuration } from "@flysdk/configuration";

export class FlyApi {
    #organizationsApiInstance;
    #machinesApiInstance;
    constructor() {
        const configuration = new Configuration({ 
            baseOptions: {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_FLY_API_TOKEN}`
                }
            },
        });
        this.#organizationsApiInstance = new OrganizationsApi(configuration);
        this.#machinesApiInstance = new MachinesApi(configuration);
    }

    public async listOrgMachines() {
        return await this.#listOrgMachinesHandler();
    }

    public async startMachine(id: string, appName: string) {
        return await this.#startMachineHandler(id, appName);
    }

    public async stopMachine(id: string, appName: string) {
        return await this.#stopMachineHandler(id, appName);
    }

    async #listOrgMachinesHandler() {
        const response = await this.#organizationsApiInstance?.machinesOrgList('personal');
     
        console.log(response?.status, 'org machines fetched')
        return response?.data.machines?? [];
    }
     
    // async #listMachinesHandler(appName: string) {
    //     const response = await this.#machinesApiInstance?.machinesList(appName)
     
    //     console.log(response?.status, `machines fetched for app: ${appName}`)
    //     return response?.data
    // }
     
    async #startMachineHandler(id: string, appName: string) {
        const response = await this.#machinesApiInstance?.machinesStart(appName, id)
      
        console.log(response?.status, `[STARTED] machine for app (${appName}) with ID (${id}) has started`)
    }
     
    async #stopMachineHandler(id: string, appName: string) {
        const response = await this.#machinesApiInstance?.machinesStop(appName, id)
     
        console.log(response?.status, `[STOPPED] machine for app (${appName}) with ID (${id}) has stopped`)
    }
}