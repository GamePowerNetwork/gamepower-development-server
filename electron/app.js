const { app, BrowserWindow } = require('electron')
const {mainUrl} = require('./utils')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(mainUrl(false, 'index'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})