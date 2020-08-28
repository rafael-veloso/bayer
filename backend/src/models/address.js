'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.Farmer, {foreignKey: 'farmerId'});
    }
  };
  Address.init({
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};