'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
var el = require('./connections.js');

el.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});



app.get('/', (req, res) => {
    res.send('Hello world\n');
});


// module.exports = client;

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
