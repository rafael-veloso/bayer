'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const farms = await queryInterface.bulkInsert('Farmers', [{
      name: 'Rafael Veloso',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {returning: true});

    await queryInterface.bulkInsert('Documents', [
      {
        documentNumber: '123456',
        documentType: 'CPF',
        farmerId: farms[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Addresses', [
      {
        street: '3',
        state: 'DF',
        address: 'SHIN QI 4',
        country: 'Brazil',
        farmerId: farms[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
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
