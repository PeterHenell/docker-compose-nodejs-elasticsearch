'use strict'

const PORT = 8080
const HOST = "0.0.0.0"

var http = require('http');
const express = require('express');
var swaggerize = require('swaggerize-express');

const app = express();

var server = http.createServer(app);

app.use(swaggerize({
    api: require('./swagger.json'),
    docspath: '/api-docs',
    handlers: './handlers'
}));

//server.listen(PORT, HOST, function () {
//    app.swagger.api.host = server.address().address + ':' + server.address().port;
//});

server.listen(PORT, HOST);


console.log(`Running on http://${HOST}:${PORT}`);

