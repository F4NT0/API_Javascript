const testeController =  require('../controllers/testeController');

module.exports = (app , db) => {
    app.get('/', (request,response) => {
        response.status(200).send({
            message: 'Conexão da API externamente foi um Sucesso!'
        })
    });

    app.post('/teste', (request,response) => {
        testeController.creation(request,response);
    });

    app.get('/teste/findone', (request,response) => {
        testeController.findAtLeastOne(request,response);
    });

    app.get('/teste/findall', (request,response) => {
        testeController.findAll(request,response);
    });

};