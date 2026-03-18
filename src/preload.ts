// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('flyApi', {
    listMachines: () => ipcRenderer.invoke('machines:list'),
    startMachine: (id: string) => ipcRenderer.invoke('machines:start', id),
    stopMachine: (id: string) => ipcRenderer.invoke('machines:stop', id)
})