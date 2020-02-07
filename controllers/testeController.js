const teste = require('../models/teste');

// POST

module.exports = {
    create(requisition,response){
        return teste.create({
            id: requisition.body.id
        }).then(teste => response.status(201).send(teste))
            .catch(error => res.status(400).send(error));
    },

};