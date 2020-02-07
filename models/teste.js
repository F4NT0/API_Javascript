'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teste = sequelize.define('Teste', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    }
  }, {});
  Teste.associate = function(models) {
    // associations can be defined here
  };
  return Teste;
};