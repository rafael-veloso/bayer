'use strict';

import { Model, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {

  class Farmer extends Model {

    public static associate(models: {[key: string]: Model[]}): void {
      const foreignKey = 'farmerId'
      this.hasOne(models.Document as any, {foreignKey, as: 'document'});
      this.hasOne(models.Address as any, {foreignKey, as: 'address'});
    }

  };

  Farmer.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Farmer'
  });
  
  return Farmer;
};
