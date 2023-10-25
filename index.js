const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: { 
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
})

app.on('resize', () => {
    canvas.width = BrowserWindow.width * 0.54;
    canvas.height = BrowserWindow.height;
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})