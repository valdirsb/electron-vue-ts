import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import isDev from 'electron-is-dev';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.disableHardwareAcceleration();

let mainWindow: BrowserWindow | null = null;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  // mainWindow.loadURL('http://localhost:5173'); 

  // mainWindow.loadURL(isDev ? 'http://localhost:5173' : `fille://${path.join(__dirname, "../dist/index.html")}` ); // Carrega o Vue

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});