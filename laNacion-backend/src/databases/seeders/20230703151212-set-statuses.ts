'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Status', [
      {
        id: 1,
        name: 'Habilitado',
      },
      {
        id: 2,
        name: 'Deshabilitado',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Status', null, {});
  },
};
