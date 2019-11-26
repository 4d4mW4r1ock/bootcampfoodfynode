const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');
const server = express();

server.set('view engine', 'njk');
server.use(express.static('public'));
server.use(express.static('assets'));

nunjucks.configure('views', { express: server});

server.get('/', function(req, res){
    return res.render('index', { items: recipes});
});

server.get('/recipe', function(req, res){
    const id = req.query.id;

    return res.render('recipe', { item : recipes[id]});
});

server.get('/about', function(req, res){
    return res.render('about');
});

server.get('/recipes', function(req, res){
    return res.render('recipes', { items: recipes});
})

server.listen('5000');