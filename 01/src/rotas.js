const express = require('express');
const { validarSenha } = require('./intermediario');
const { exibirAlunos, buscarAlunoId, cadastraAluno, deletarAluno } = require('./controladores/alunos');

const rotas = express();

//rotas.use(validarSenha);

rotas.get('/', exibirAlunos);
rotas.get('/aluno/:id', buscarAlunoId);
rotas.post('/', cadastraAluno);
rotas.delete('/:id', deletarAluno);


module.exports = rotas;