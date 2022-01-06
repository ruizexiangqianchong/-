/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main/electron.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main/electron.ts":
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 * @desc electron 主入口
 */
var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! electron */ "electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    ipcMain = _require.ipcMain;

var ROOT_PATH = path.join(app.getAppPath(), '../');
/**
 * 当主进程接受到来自渲染进程的case时触发
 */

ipcMain.on('get-root-path', function (evt) {
  /**
   * 向渲染进程发送异步回调
   */
  evt.reply('reply-root-path', ROOT_PATH);
});
/**
 *
 * @return {Promise<boolean>}
 */

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return "development" === 'development';
}
/**
 * 创建浏览器窗口
 */


function createWindow() {
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true // 注入node模块

    }
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL("http://127.0.0.1:7001");
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }
}

app.whenReady().then(function () {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
}); // 关闭程序

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4vZWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJhcHAiLCJCcm93c2VyV2luZG93IiwiaXBjTWFpbiIsIlJPT1RfUEFUSCIsImpvaW4iLCJnZXRBcHBQYXRoIiwib24iLCJldnQiLCJyZXBseSIsImlzRGV2IiwicHJvY2VzcyIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwibm9kZUludGVncmF0aW9uIiwibG9hZFVSTCIsIl9fZGlybmFtZSIsIndoZW5SZWFkeSIsInRoZW4iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIiwicGxhdGZvcm0iLCJxdWl0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLGVBQXdDQSxtQkFBTyxDQUFDLDBCQUFELENBQS9DO0FBQUEsSUFBUUMsR0FBUixZQUFRQSxHQUFSO0FBQUEsSUFBYUMsYUFBYixZQUFhQSxhQUFiO0FBQUEsSUFBNEJDLE9BQTVCLFlBQTRCQSxPQUE1Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxDQUFVSixHQUFHLENBQUNLLFVBQUosRUFBVixFQUE0QixLQUE1QixDQUFsQjtBQUVBO0FBQ0E7QUFDQTs7QUFDQUgsT0FBTyxDQUFDSSxFQUFSLENBQVcsZUFBWCxFQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDbkM7QUFDRjtBQUNBO0FBQ0VBLEtBQUcsQ0FBQ0MsS0FBSixDQUFVLGlCQUFWLEVBQTZCTCxTQUE3QjtBQUNELENBTEQ7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTTSxLQUFULEdBQTBCO0FBQ3hCO0FBQ0EsU0FBT0MsYUFBQSxLQUF5QixhQUFoQztBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCLE1BQU1DLFVBQVUsR0FBRyxJQUFJWCxhQUFKLENBQWtCO0FBQ25DWSxTQUFLLEVBQUUsSUFENEI7QUFFbkNDLFVBQU0sRUFBRSxHQUYyQjtBQUduQ0Msa0JBQWMsRUFBRTtBQUNkQyxxQkFBZSxFQUFFLElBREgsQ0FDUzs7QUFEVDtBQUhtQixHQUFsQixDQUFuQjs7QUFRQSxNQUFJUCxLQUFLLEVBQVQsRUFBYTtBQUNYO0FBQ0FHLGNBQVUsQ0FBQ0ssT0FBWDtBQUNELEdBSEQsTUFHTztBQUNMTCxjQUFVLENBQUNLLE9BQVgsa0JBQTZCbkIsSUFBSSxDQUFDTSxJQUFMLENBQVVjLFNBQVYsRUFBcUIsb0JBQXJCLENBQTdCO0FBQ0Q7QUFDRjs7QUFFRGxCLEdBQUcsQ0FBQ21CLFNBQUosR0FBZ0JDLElBQWhCLENBQXFCLFlBQU07QUFDekJULGNBQVk7QUFDWlgsS0FBRyxDQUFDTSxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFZO0FBQzdCLFFBQUlMLGFBQWEsQ0FBQ29CLGFBQWQsR0FBOEJDLE1BQTlCLEtBQXlDLENBQTdDLEVBQWdEWCxZQUFZO0FBQzdELEdBRkQ7QUFHRCxDQUxELEUsQ0FPQTs7QUFDQVgsR0FBRyxDQUFDTSxFQUFKLENBQU8sbUJBQVAsRUFBNEIsWUFBTTtBQUNoQyxNQUFJSSxPQUFPLENBQUNhLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDakN2QixPQUFHLENBQUN3QixJQUFKO0FBQ0Q7QUFDRixDQUpELEU7Ozs7Ozs7Ozs7OztBQ3ZEQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJlbGVjdHJvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL21haW4vZWxlY3Ryb24udHNcIik7XG4iLCIvKipcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xuICovXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGlwY01haW4gfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG5cbmNvbnN0IFJPT1RfUEFUSCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnLi4vJyk7XG5cbi8qKlxuICog5b2T5Li76L+b56iL5o6l5Y+X5Yiw5p2l6Ieq5riy5p+T6L+b56iL55qEY2FzZeaXtuinpuWPkVxuICovXG5pcGNNYWluLm9uKCdnZXQtcm9vdC1wYXRoJywgKGV2dCkgPT4ge1xuICAvKipcbiAgICog5ZCR5riy5p+T6L+b56iL5Y+R6YCB5byC5q2l5Zue6LCDXG4gICAqL1xuICBldnQucmVwbHkoJ3JlcGx5LXJvb3QtcGF0aCcsIFJPT1RfUEFUSCk7XG59KTtcblxuLyoqXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAqL1xuZnVuY3Rpb24gaXNEZXYoKTogYm9vbGVhbiB7XG4gIC8vIPCfkYkg6L+Y6K6w5b6X5oiR5Lus6YWN572u5Lit6YCa6L+HIHdlYnBhY2suRGVmaW5lUGx1Z2luIOWumuS5ieeahOaehOW7uuWPmOmHj+WQl1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG59XG5cbi8qKlxuICog5Yib5bu65rWP6KeI5Zmo56qX5Y+jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLCAvLyDms6jlhaVub2Rl5qih5Z2XXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKGlzRGV2KCkpIHtcbiAgICAvLyDwn5GHIOeci+WIsOS6huWQl++8jOWcqOW8gOWPkeeOr+Wig+S4i++8jOaIkeS7rOWKoOi9veeahOaYr+i/kOihjOWcqCA3MDAxIOerr+WPo+eahCBSZWFjdFxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgaHR0cDovLzEyNy4wLjAuMTo3MDAxYCk7XG4gIH0gZWxzZSB7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyl9YCk7XG4gIH1cbn1cblxuYXBwLndoZW5SZWFkeSgpLnRoZW4oKCkgPT4ge1xuICBjcmVhdGVXaW5kb3coKTtcbiAgYXBwLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVXaW5kb3coKTtcbiAgfSk7XG59KTtcblxuLy8g5YWz6Zet56iL5bqPXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==