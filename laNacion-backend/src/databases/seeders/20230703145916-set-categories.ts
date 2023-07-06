'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Category', [
      {
        id: 1,
        name: 'Hogar',
      },
      {
        id: 2,
        name: 'Deporte',
      },
      {
        id: 3,
        name: 'Sanitarios',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Category', null, {});
  },
};
