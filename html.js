var http = require("http");

http.createServer(function(resques,response){
    response.end("<h1>Ola Mundo</h>")
}).listen(8181);

console.log("servidor no ar...")