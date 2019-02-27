/* eslint-disable */
/*
 封装与原声安卓和ios方法调用的方法
 * funcName调用的方法名
 * data 方法调用的参数
 * callback 回调函数
*/
var uniqueId = 0; //连接次数

function jsBridge(funcName, data, callback) {
  //调用ios方法直接使用setupWebViewJavascriptBridge方法即可
  if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { //ios
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(funcName, data, callback);
    });
  } else if (navigator.userAgent.match(/android/i)) {
    connectWebViewJavascriptBridge(function (bridge) {
      if (uniqueId == 1) {
        //在安卓上， 需要调用一次init() 方法进行初始化， 且只能调用一次， 重复调用会抛异常
        bridge.init(function (message, responseCallback) {
          responseCallback(data)
        });
      }
      if (window.WebViewJavascriptBridge) {
        window.WebViewJavascriptBridge.callHandler(
          funcName, data,
          callback
        );
      } else {
        bridge.callHandler(funcName, data, callback);
      }
      bridge.registerHandler("openPage", function (data, responseCallback) {
        console.log("from android", data);
        alert(data)
        var responseData = "我接受到了安卓的调用";
      });
    });
  } else {
    console.log('调用错误');
  }
}

function setupWebViewJavascriptBridge(callback) {

  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 100)
}

function connectWebViewJavascriptBridge(callback) {
  uniqueId++;
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {

    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        callback(WebViewJavascriptBridge)
      }, false);
  }
}
export {
  jsBridge
}
