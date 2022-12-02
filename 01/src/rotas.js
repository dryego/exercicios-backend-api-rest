const express = require('express');
const { validarSenha } = require('./intermediario');
const { exibirAlunos, buscarAlunoId } = require('./controladores/alunos');

const rotas = express();

//rotas.use(validarSenha);

rotas.get('/', exibirAlunos);
rotas.get('/aluno/:id', buscarAlunoId);


module.exports = rotas;