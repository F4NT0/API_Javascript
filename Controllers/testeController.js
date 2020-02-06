/*
 * Pegamos as funções do DAO e criamos controladores de acesso
 */

// Requerimentos Básicos
const constants = require('../config/constants');

// Chamando o DAO
const DAO = require('../DAO/testeDAO');

class testeController{

    // ORDER QUERY, ordenação
    static constructOrderQuery(query){
        let orderQuery = {};
        orderQuery.isAscending = query.isAscending === 'false' ? 'DESC' : 'ASC';
        switch(query.sort){
            case 'id':
                orderQuery.field = 'id';
                break;
            case 'tipo_calculo':
                orderQuery.field = 'tipo_calculo';
                break;
            case 'valor':
                orderQuery.field = 'valor';
                break;
            default:
                orderQuery.field = 'id';
        }
        return orderQuery;
    }

    // WHERE QUERY
    static constructWhereQuery(query){
        let whereQuery = {};

        if(query.contains !== undefined){
            whereQuery.contains = query.contains;
        }
        if(query.ID !== undefined){
            whereQuery.id = query.ID;
        }
        if(query.tipo_calculo !== undefined){
            whereQuery.tipo_calculo = query.tipo_calculo;
        }
        if(query.valor !== undefined){
            whereQuery.valor = query.valor;
        }
        return whereQuery;
    }

    // HANDLER
    static fetchTesteHandler(query,callback){
        const orderQuery = testeController.constructOrderQuery(query);
        const whereQuery = testeController.constructWhereQuery(query);
        if(query.count === 'true'){
            testeController.fetchTestesCount(whereQuery);
        }else{
            if(query.all === 'true'){
                testeController.fetchAllTestes(orderQuery,whereQuery);
            }
        }
    }

    // FETCH ALL
    static fetchAllTestes(orderQuery,whereQuery,callback){
        DAO.fetchAllTestes(orderQuery,whereQuery,(error,data) => {callback(error,data)})
    }

    // COUNT
    static fetchTestesCount(whereQuery,callback){
        DAO.fetchTestesCount(whereQuery, (error,data) => {callback(error,data)})
    }

    // SEARCH WITH ID
    static findByID(id,callback){
        DAO.findByID(id,(error,data) => {callback(error,data)})
    }

    // ADD
    static addTeste(teste,callback){
        DAO.addTeste(teste, (error,data) => {callback(error,data)})
    }

    // UPDATE
    static updateTeste(newTeste,callback){
        DAO.updateTeste(newTeste,(error,data) => {callback(error,data)})
    }

    // DELETE
    static delete(id,callback){
        DAO.deleteTeste(id,(error,data) => {callback(error,data)})
    }

}
module.exports = testeController;