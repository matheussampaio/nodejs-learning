var http = require('http');
var url = require('url');

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime (time) {
    return { unixtime: time.getTime() };
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;

    if (parsedUrl.pathname === '/api/parsetime') {
        result = parsetime(time);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixtime(time);
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }

});

server.listen(Number(process.argv[2]));


