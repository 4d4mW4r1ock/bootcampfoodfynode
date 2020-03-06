const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const routes = require('./routes');

server.set('view engine', 'njk');
server.use(express.static('public'));
server.use(express.static('assets'));
server.use(routes);

nunjucks.configure('views', { express: server});

var port = process.env.PORT || 3000;
server.listen(port, function(){
    console.log('server is running!');
});