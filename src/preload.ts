// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('flyApi', {
    listOrgMachines: () => ipcRenderer.invoke('organizations:listMachines'),
    listMachines: () => ipcRenderer.invoke('machines:list'),
    startMachine: (id: string, appName: string) => ipcRenderer.invoke('machines:start', id, appName),
    stopMachine: (id: string, appName: string) => ipcRenderer.invoke('machines:stop', id, appName),
})

contextBridge.exposeInMainWorld('system', {
    shutdownApp: () => ipcRenderer.send('system:shutdown')
})