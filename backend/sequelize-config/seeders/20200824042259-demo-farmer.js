'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = {
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const farms = await queryInterface.bulkInsert('Farmers', [
      {name: 'Rafael Veloso', ...date},
      {name: 'Rafaela Garcia', ...date},	
      {name: 'Roberto Moura', ...date},	
      {name: 'Alberto Souza', ...date},
      {name: 'Marcela Gama', ...date},
      {name: 'Sergio Veloso', ...date}
    ], {returning: true});

    await queryInterface.bulkInsert('Documents', [
      {
        documentNumber: '123456',
        documentType: 'CPF',
        farmerId: farms[0].id,
        ...date
      },
      {
        documentNumber: '64532134654',
        documentType: 'CPF',
        farmerId: farms[1].id,
        ...date
      },
      {
        documentNumber: '64532133333',
        documentType: 'CPF',
        farmerId: farms[2].id,
        ...date
      },
      {
        documentNumber: '1862656522',
        documentType: 'CPF',
        farmerId: farms[3].id,
        ...date
      },
      {
        documentNumber: '789546',
        documentType: 'CPF',
        farmerId: farms[4].id,
        ...date
      },
      {
        documentNumber: '222222',
        documentType: 'CPF',
        farmerId: farms[5].id,
        ...date
      }
    ], {});

    await queryInterface.bulkInsert('Addresses', [
      {
        street: '34',
        state: 'DF',
        address: 'SHIN QI 4',
        country: 'Brazil',
        farmerId: farms[0].id,
        ...date
      },
      {
        street: '1',
        state: 'DF',
        address: 'SQS 415 BL D',
        country: 'Brazil',
        farmerId: farms[1].id,
        ...date
      },
      {
        street: '2',
        state: 'DF',
        address: 'SHCES 611 BL D',
        country: 'Brazil',
        farmerId: farms[2].id,
        ...date
      },

      {
        street: '3',
        state: 'DF',
        address: 'SQN 410 BL F',
        country: 'Brazil',
        farmerId: farms[3].id,
        ...date
      },
      {
        street: '4',
        state: 'DF',
        address: 'SHIN QI 4',
        country: 'Brazil',
        farmerId: farms[4].id,
        ...date
      },
      {
        street: '5',
        state: 'DF',
        address: 'QRSW 8 BL A14',
        country: 'Brazil',
        farmerId: farms[5].id,
        ...date
      }
    ], {});

    return farms;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
    await queryInterface.bulkDelete('Documents', null, {});
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
