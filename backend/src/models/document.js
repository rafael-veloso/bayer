'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {
      this.belongsTo(models.Farmer, {foreignKey: 'farmerId'})
    }
  };
  Document.init({
    documentNumber: DataTypes.STRING,
    documentType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};