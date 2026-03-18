/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />


// 2. Tell TS about your custom Electron bridge
interface IElectronAPI {
    sayHello: () => void;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }

    namespace NodeJS {
        interface ProcessEnv {
            MAIN_VITE_FLY_API_TOKEN: string;
            MAIN_VITE_FLY_API_HOSTNAME: string;
        }
  }
}

export {}