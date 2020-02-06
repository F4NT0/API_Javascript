'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teste = sequelize.define('Teste', {
    id: DataTypes.INTEGER
  }, {});
  Teste.associate = function(models) {
    // associations can be defined here
  };
  return Teste;
};