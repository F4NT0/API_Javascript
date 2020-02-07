const testeController =  require('../controllers/testeController');

module.exports = (app) => {
    app.get('/', (requisition,response) => {
        response.status(200).send({
            message: 'Conexão da API externamente foi um Sucesso!'
        })
    });

    app.post('/teste', testeController.create()) //teste
};