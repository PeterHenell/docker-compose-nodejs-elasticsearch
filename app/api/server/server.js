'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
var el = require('./connections.js');

el.health();


app.get('/', (req, res) => {
    res.send('Hello world\n');
});


app.get('/pet', (req, res) => {
    // implement get pet object
    var resp = el.createIndex();
    res.send(`resp=${resp}\n`);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
