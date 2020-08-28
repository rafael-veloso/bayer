'use strict';

const models = require('../models');
const Op = models.Sequelize.Op;

class FarmerService {

  static async find(nameOrDocument) {
    try {
      return await models.Farmer.findAll({
        where: {
          [Op.or]: [
            {name: {[Op.iLike]: `${nameOrDocument}%`}},
            {'$document.documentNumber$': {[Op.iLike]: `${nameOrDocument}%`}}
          ]
        },
        include: ["document", "address"]
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = FarmerService;