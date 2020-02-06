/*
    Agora configurando as Rotas do Controllers
 */

// Requerimentos
const express = require('express');
const ResponseHelper = require('../helpers/ResponseHelper');

// Controllers
const testeController = require('../Controllers/testeController');

// Criando o Router
const routerTeste = express.Router();

/* REQUISIÇÕES */

// (FETCH) GET
routerTeste.get('/'),(requisicao,resposta) => {
    testeController.fetchTesteHandler(requisicao.query, (error,data) => {
        resposta.json(ResponseHelper.createResponse(error,data,true))
    })
};

// (FIND BY ID) (GET)
routerTeste.get(':/id', (requisicao,resposa) => {
    testeController.findByID(requisicao.params.id, (error,data) => {
        resposa.json(ResponseHelper.createResponse(error,data))
    })
});

// (ADD) (POST)
routerTeste.post('/', (requisicao,resposta) => {
    testeController.addTeste(requisicao.body, (error,data) => {
        resposta.json(ResponseHelper.createResponse(error,data))
    })
});

// (UPDATE) (PUT)
routerTeste.put('/', (requisicao,resposta) => {
    testeController.updateTeste(requisicao.body, (error,data) => {
        resposta.json(ResponseHelper.createResponse(error,data))
    })
});

// (DELETE) (DELETE)
routerTeste.delete(':/id', (requisicao,resposta) => {
    testeController.delete(requisicao.params.id, (error,data) => {
        resposta.json(ResponseHelper.createResponse(error,data))
    })
});

module.exports = routerTeste;

// Depois adicionamos no app.js