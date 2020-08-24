'use strict';

const db = require('../models');
const Op = require('Sequelize').Op

class FarmerService {

  static async find(nameOrDocument) {
    try {
      return await db.Farmer.findAll({
        where: {
          [Op.or]: [{name: {[Op.iLike]: `${nameOrDocument}%`}}, {document: {[Op.like]: `${nameOrDocument}%`}}]
        }
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = FarmerService;