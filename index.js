var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {

    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.writeHead(404, {
            'Content-Type': 'image/jpeg'
        });
        fs.readFile('./cat.png', function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});

server.listen(9000);