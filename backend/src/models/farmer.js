'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Farmer extends Model {};

  Farmer.init({
    name: DataTypes.STRING,
    document: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Farmer',
  });

  return Farmer;

};