/*
File Purpose: Basic webapp startup & background functionality
Author: Jack Kill
Created: 2024-01-25
*/
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
        },
        resizable: false
    })

    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

// Additional listeners specifically for MacOS

app.on('window-all-closed', function() {
    // On MacOS, applications usually don't fully close unless user hits command+Q
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function() {
    // On MacOS, windows get re-created in the app when the dock icon is clicked and there are no other windows open
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})