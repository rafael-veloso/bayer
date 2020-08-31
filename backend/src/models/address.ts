'use strict';

import { Model, Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {

  class Address extends Model {
  };

  Address.init({
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address'
  });
  return Address;
};