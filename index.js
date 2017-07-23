var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 7000;

server.listen(port,function () {
    console.log("server is listening on %j", server.address())
});