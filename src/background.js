import { initElectron, initIpcMain } from "client-ipc-event";

initElectron().then(({ BrowserWindow }) => {
  // console.log(App)
  initIpcMain(BrowserWindow);
  // initIpcRender()
});
