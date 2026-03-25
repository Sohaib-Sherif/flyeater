import { App } from "@capacitor/app";

export class System {
    shutdownApp() {
        App.exitApp()
    }
}