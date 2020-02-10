const testeController =  require('../controllers/testeController');

module.exports = (app) => {
    app.get('/', (request,response) => {
        response.status(200).send({
            message: 'Conexão da API externamente foi um Sucesso!'
        })
    });

    // ROTAS DE TESTE

    // POST (função CREATE no controllers/testeControllers)
    app.post('/teste', (request,response) => {
        testeController.creation(request,response);
    });

    // GET (função FINDONE no controllers/testeControllers)
    app.get('/teste/findone', (request,response) => {
        testeController.findAtLeastOne(request,response);
    });

    // GET (função FINDALL no controllers/testeControllers)
    app.get('/teste/findall', (request,response) => {
        testeController.findAll(request,response);
    });

    // PUT (função UPDATE no controllers/testeControllers)
    const valorNovo = {id: 1}; // novo id para modificar no banco
    app.put('/teste/update', (request,response) => {
        testeController.updateValue(valorNovo,request,response);
    })

    // DELETE
    app.delete('/teste/delete', (request,response) => {
        testeController.deleteValues(request,response);
    })

};