'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Farmers', [{
      name: 'Rafael Veloso',
      document: '123456',
      address: 'SHIN QI 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rafaela Garcia',
      document: '64532134654',
      address: 'SQS 415 BL D',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Roberto Moura',
      document: '64532133333',
      address: 'SHCES 611 BL D',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alberto Souza',
      document: '1862656522',
      address: 'SQN 410 BL F',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcela Gama',
      document: '789546',
      address: 'SHIN QI 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sergio Veloso',
      document: '222222',
      address: 'QRSW 8 BL A14',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Farmers', null, {});
  }
};
