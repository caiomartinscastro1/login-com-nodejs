const express = require('express');
const routes = express.Router();
const home = require('./controllers/home');
const cadastro = require('./controllers/cadastro');
const dados = require('./controllers/dados');
const save = require('./controllers/save');
const verifica = require('./controllers/verifica');

routes.get('/' , home);
routes.get('/cadastro' , cadastro);
routes.get('/dados' , dados);
routes.post('/save' , save);
routes.post('/verifica' , verifica);

module.exports = routes;