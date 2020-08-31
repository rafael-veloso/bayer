import { Model, Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {

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