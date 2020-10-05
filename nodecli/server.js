//サーバ起動スクリプト

// var http = require("http");//httpモジュールをローカル変数に割り当てている
// var url = require("url");//urlモジュール：URLの各部分(リクエストパスやクエリ文字列)を抽出するメソッドを提供する。

// function start(route, handle) {//start関数(今回だとサーバ起動スクリプト)exportすることで他ファイルの関数が利用可能。
//   function onRequest(request, response) {
//     var postData = "";
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");//ブラウザがファビコンをロードするため、二回出力。

//     request.setEncoding("utf8");

//     request.addListener("data", function(postDataChunk) {
//       postData += postDataChunk;
//       console.log("Received POST data chunk '"+
//       postDataChunk + "'.");
//     });

//     request.addListener("end", function() {
//       route(handle, pathname, response, postData);
//     });

//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;