'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Farmer extends Model {
    static associate(models) {
      this.hasOne(models.Document, {foreignKey: 'farmerId', as: 'document'});
      this.hasOne(models.Address, {foreignKey: 'farmerId', as: 'address'});
    }
  };

  Farmer.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Farmer',
  });
  
  return Farmer;
};
