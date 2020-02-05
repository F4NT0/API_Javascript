/*
* Aqui está configurado o Sequelize
*
*/
'use strict';
// Chamandos as informações necessárias
let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let basename = path.basename(__filename);
let enviroment = process.env.NODE_ENV || 'development'; // local no mysql
let config = require(__dirname + '/../config/config.json')[enviroment]; // pegando a configuração
let db = {};

// Inicializando o Sequelize
if(config.use_env_variable){
    let sequelize = new Sequelize(process.env[config.use_env_variable],config)
} else{
    let sequelize = new Sequelize(config.database, config.username, config.password, config)
}

console.log(config);

fs

.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename) && (file.slice(-3) === '.js'))
})
.forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model
});

// Definindo os Sequelizes
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exportar o Model
module.exports = db;