var server = require("./server");//requireし、変数に割り当てることでサーバ起動関数を利用できる。
var router = require("./router");//route関数をサーバに組み込む
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);