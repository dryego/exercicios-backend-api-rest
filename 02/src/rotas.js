const express = require('express');
const { encontraConvidado, adicionarConvidado, removerConvidado } = require('./controladores/convidados')

const rotas = express();

//rotas.get('/convidados', listaConvidados);
rotas.get('/convidados', encontraConvidado);
rotas.post('/convidados', adicionarConvidado);
rotas.delete('/convidados/:nome', removerConvidado);

module.exports = rotas;