/*
*  DAO é um arquivo com as funções necessárias
* para alterar ou pegar os Valores
*/

// Chamada do Model index com sequelize
const constants = require('../config/constants');
const db = require('../models/index');

// Chamada do Model principal desejado
const testes = db.sequelize.model('testes');

// Funções ALL FETCH
function fetchAllTestes(orderQuery, WhereQuery, callback){
    testes.findAll( {
        order: (createOrderClause(orderQuery)), //função para ordenar os dados
        where: (createWhereClause(whereQuery))
    }).then(testes => {
        callback(null, testes)
    }).catch(error => {
        let errorObj = {
            statusDesc: error,
            statusCode: constants.errorCodeSequelize
        };
        callback(errorObj, null)
    })
}

// Fetch COUNT
function fetchTestesCount(whereQuery, callback){
    testes.count({
        where: (createWhereClause(whereQuery)),
        distinct: true
    }).then(count =>{
        callback(null,count)
    }).catch(error => {
        let errorObj = {
            statusDesc: error,
            statusCode: constants.errorCodeSequelize
        };
        callback(errorObj,null)
    })
}

// FindByID
function findByID(id,callback){
    testes.findById(id).then(testes => {
        if(testes == null){
            let errorObj = {
                statusDesc: constants.valueNotFound,
                statusCode: constants.errorCodeSequelize
            };
            callback(errorObj,null)
        }else{
            callback(null,testes)
        }
    }).catch(error => {
        let errorObj = {
            statusDesc: error,
            statusCode: constants.errorCodeSequelize
        };
        callback(errorObj,null)
    })
}

// Função ADD
function addTeste(teste,callback){
    testes.create(teste).then(newTeste => {
        callback(null,newTeste)
    }).catch(error => {
        let errorObj = {
            statusDesc: error,
            statusCode: constants.errorCodeSequelize
        };
        callback(errorObj,null)
    })
}

// Função DELETE
function deleteTeste(id,callback){
    testes.findById(id).then(teste => {
        if(teste == null){
            let errorObj = {
                statusDesc: constants.valueNotFound,
                statusCode: constants.errorCodeSequelize
            };
            callback(errorObj,null)
        }else{
            teste.destroy({returning: true}).then(instance =>{
                callback(null,instance)
            })
        }
    }).catch(error =>{
        let errorObj = {
            statusDesc: error,
            statusCode: constants.errorCodeSequelize
        };
        callback(errorObj,null)
    })
}

// Função UPDATE
function updateTeste(newTeste,callback){
    testes.findById(newTeste.id).then(teste =>{
        if(teste == null){
            let errorObj = {
                statusDesc: constants.valueNotFound,
                statusCode: constants.errorCodeSequelize
            }
        }else{
            teste.update(newTeste, {returning: true}).then(instance =>{
                callback(null,instance)
            })
        }
    })
}

// Função Order Clause
function createOrderClause(query){
    return [query.model === undefined? [query.field,query.isAscending]:[query.model,query.field,query.isAscending]]
}

// Função Where Clause
function createWhereClause(query){
    if(query.contains !== undefined){
        query.$or =[
            {id: {like: `%${query.contains}%`}},
            {tipo_calculo: {like: `%${query.contains}%`}},
            {valor: {like: `%${query.contains}%`}},
        ]
    }
    delete query.contains;
    return query;
}

// Exportar as Funções
module.exports.fetchAllTestes = fetchAllTestes;
module.exports.findByID = findByID;
module.exports.fetchTestesCount = fetchTestesCount;
module.exports.addTeste = addTeste;
module.exports.deleteTeste = deleteTeste;
module.exports.updateTeste = updateTeste;
module.exports.createOrderClause = createOrderClause;
module.exports.createWhereClause = createWhereClause;

