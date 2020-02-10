'use strict';
module.exports = (sequelize, DataTypes) => {
  const teste = sequelize.define('teste', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {});
  teste.associate = function(models) {
    // associations can be defined here
  };
  return teste;
};