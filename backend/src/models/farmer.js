'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Farmer extends Model {
  };

  Farmer.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Farmer'
  });
  Farmer.associate = function(models) {
    const foreignKey = 'farmerId'
    this.hasOne(models.Document, {foreignKey, as: 'document'});
    this.hasOne(models.Address, {foreignKey, as: 'address'});
  }
  
  return Farmer;
};
