const db = require('../models/index');
const teste = db.sequelize.model('teste');

module.exports = {

    // CREATE (POST)
    creation(req,res){
        teste.create({
            id: req.body.id
        }).then(novo => {
            res.json(novo)
        })
    },

    // READ (FIND ONE) (GET)
    findAtLeastOne(req,res){
        teste.findOne({
            id: req.body.id
        }).then(dados => {
            res.json(dados)
        })
    },

    // READ (FIND ALL) (GET)
    findAll(req,res){
        teste.findAll({
            id: req.body.id
        }).then(dados => {
            res.json(dados)
        })
    },

    // UPDATE (PUT)
    updateValue(value,req,res){
        teste.update(value,{where: {id: req.body.id}})
            .then(updated => {
                res.json(updated)
            });
    },

    // DELETE (DELETE)
    deleteValues(req,res){
        teste.destroy({
            where: {id: req.body.id}
        }).then(deletado => {
            res.json({valor: "Status do Delete", value: `${deletado}`})
        })
    }

};