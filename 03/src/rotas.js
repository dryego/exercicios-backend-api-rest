const express = require('express');
const { exibirLivros, buscarLivroId, adicionarLivro, alteraLivro, subistituirDadosDoLivro, deletarLivro } = require('./controladores/livro');

const rotas = express();

rotas.get('/livros', exibirLivros);
rotas.get('/:id', buscarLivroId)
rotas.post('/livros', adicionarLivro);
rotas.put('/livros/:id', alteraLivro);
rotas.patch('/livros/:id', subistituirDadosDoLivro);
rotas.delete('/livros/:id', deletarLivro);


module.exports = rotas;