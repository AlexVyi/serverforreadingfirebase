var restify = require('restify');
var plugins = require('restify-plugins');
var bunyan = require('bunyan');



var options = {
    name: 'serverApi'
};

var server = restify.createServer(options);

server.on('after', plugins.auditLogger({
    log: bunyan.createLogger({
        name: 'audit',
        stream: process.stdout
    })
}));


module.exports = server;
require('./routes');
