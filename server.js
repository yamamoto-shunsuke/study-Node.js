//サーバ起動スクリプト

var http = require("http"); //httpモジュールをローカル変数に割り当てている

function start() { //start関数(今回だとサーバ起動スクリプト)exportすることで他ファイルで利用可能。
  function onRequest(request, response) {
    console.log("Request received."); //ブラウザがファビコンをロードするため、二回出力。
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;