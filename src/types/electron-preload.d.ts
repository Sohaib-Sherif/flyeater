/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />

import { Machine, OrgMachine } from "../../flysdk/api";


// 2. Tell TS about your custom Electron bridge
interface IFlyApi {
    listOrgMachines: () => OrgMachine[];
    listMachines: (appName: string) => Machine[];
    startMachine: (id: string, appName: string) => void;
    stopMachine: (id: string, appName: string) => void;
}

declare global {
    interface Window {
        flyApi: IFlyApi;
    }

    namespace NodeJS {
        interface ProcessEnv {
            MAIN_VITE_FLY_API_TOKEN: string;
            MAIN_VITE_FLY_API_HOSTNAME: string;
        }
  }
}

export {}