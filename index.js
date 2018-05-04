var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": 'text/plain'});
    res.end('Hello Friend!');
}).listen(8080);

var upperCase = require('upper-case');
upperCase(null);
upperCase('string');
upperCase('string', 'tr');

upperCase({ toString: function() {return 'test'} })
console.log("Server started on localhost:8080, press Ctrl-C to terminate....");