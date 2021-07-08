/**
 * @desc electron 主入口
 */
const path = require('path');
const { app, BrowserWindow } = require('electron');

/**
 *
 * @return {Promise<boolean>}
 */
function isDev(): boolean {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

/**
 * 创建浏览器窗口
 */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // 注入node模块
    },
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 关闭程序
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
