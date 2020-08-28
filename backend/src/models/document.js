'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Document extends Model {
  };

  Document.init({
    documentNumber: DataTypes.STRING,
    documentType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Document'
  });
  return Document;
};