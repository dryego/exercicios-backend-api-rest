const express = require('express');
const { exibirAlunos } = require('./controladores/alunos');
const { validarSenha } = require('./intermediario');

const rotas = express();

rotas.use(validarSenha);

rotas.get('/alunos', exibirAlunos);


module.exports = rotas;