const express = require('express');
const recipes = require('./data');
const routes = express.Router();

//ROTAS DO INDEX
routes.get('/', function(req, res){
    return res.render('index', { items: recipes});
});

routes.get('/recipe', function(req, res){
    const id = req.query.id;

    return res.render('recipe', { item : recipes[id]});
});

routes.get('/about', function(req, res){
    return res.render('about');
});

routes.get('/recipes', function(req, res){
    return res.render('recipes', { items: recipes});
})

module.exports = routes;