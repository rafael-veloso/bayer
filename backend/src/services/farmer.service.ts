import models from '../models';
const Op = models.Sequelize.Op;

export class FarmerService {

  static async find(nameOrDocument: any) {
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
