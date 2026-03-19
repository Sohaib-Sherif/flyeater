declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent, nativeImage, Tray } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { MachinesApi, OrganizationsApi } from './../flysdk/api';
import { Configuration } from '../flysdk/configuration';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
let organizationsApiInstance: OrganizationsApi | null = null;
let machinesApiInstance: MachinesApi | null = null;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 560,
    height: 320,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.on('blur', () => {
    mainWindow?.hide();
  })
};

const showWindow = () => {
  if (!mainWindow) {
    createWindow();
  }

  if (!mainWindow) return;

  const trayBounds = tray?.getBounds();
  if (trayBounds) {
    const width = 560;
    const height = 320;
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (width / 2));
    const y = Math.round(trayBounds.y + trayBounds.height + 4)

    mainWindow.setBounds({ x, y, width, height });
  }

  mainWindow.show();
  mainWindow.focus();
};

const createTray = () => {
  if (tray) return;

  const icon = nativeImage.createFromPath('');
  icon.setTemplateImage(true);
  tray = new Tray(icon);
  tray.setToolTip('FlyEater');

  tray.on('click', () => {
    if (mainWindow?.isVisible()) {
      mainWindow.hide();
    } else {
      showWindow();
    }
  });

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  createTray();
  app.dock?.hide()

  // mainWindow?.webContents.openDevTools()

  const configuration = new Configuration({ 
    baseOptions: {
      headers: {
        Authorization: `Bearer ${process.env.MAIN_VITE_FLY_API_TOKEN}` 
      }
    },
  });

  organizationsApiInstance = new OrganizationsApi(configuration);
  machinesApiInstance = new MachinesApi(configuration);

  ipcMain.handle('organizations:listMachines', listOrgMachinesHandler)
  ipcMain.handle('machines:list', listMachinesHandler);
  ipcMain.handle('machines:start', startMachineHandler);
  ipcMain.handle('machines:stop', stopMachineHandler)
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

async function listOrgMachinesHandler() {
  const response = await organizationsApiInstance?.machinesOrgList('personal');

  console.log(response?.status, 'org machines fetched')
  return response?.data.machines;
}
async function listMachinesHandler() {
  const response = await organizationsApiInstance?.machinesOrgList('personal')

  console.log(response?.status, 'machines fetched')
  return response?.data
}

async function startMachineHandler(event: IpcMainInvokeEvent, id: string) {
  const response = await machinesApiInstance?.machinesStart('ente', id)
  
  console.log(response?.status, 'machine started')
}

async function stopMachineHandler(event: IpcMainInvokeEvent, id: string) {
  const response = await machinesApiInstance?.machinesStop('ente', id)

  console.log(response?.status, 'machine stopped')
}