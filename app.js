// invocando o Model
const models = require("./models");
const express = require('express');
const constants = require("./config/constants");
const cors = require('cors');

// Rota do Teste
const routerTeste = require('./routes/teste');

// Iniciando o Servidor
models.sequelize.sync().then(function() {
    setupServer()
});

// Função do Servidor
function setupServer() {
    const app = express();
    app.use(cors());

    // Chamando a rota de teste
    app.use('/fantoapi/teste', routerTeste);

    // Criando um acesso externo
    app.listen(process.env.port || 4000, function () {
        console.log("INVOCANDO O FANTO")
    })
}
