'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Product', [
      {
        sku: 12345,
        category_id: 2,
        product_name: 'Camiseta Argentina Qatar 2022',
        description: 'Camiseta de la selección Argentina Player Edition del mundial Qatar 2022.',
        price: 9.99,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 49823,
        category_id: 1,
        product_name: 'Juego de Sillas de Madera',
        description: 'Juego de cuatro sillas de madera de pino.',
        price: 20.0,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 12042,
        category_id: 3,
        product_name: 'Duchador',
        description: 'Duchador de aluminio cromado. 20mm.',
        price: 4.99,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 12142,
        category_id: 3,
        product_name: 'Tapón para bañera',
        description: 'Tapón de silicona resistente al agua caliente.',
        price: 1.0,
        status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 51822,
        category_id: 3,
        product_name: 'Espejo de baño',
        description: 'Espejo 20x20cm',
        price: 10.0,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 84729,
        category_id: 2,
        product_name: 'Botines Nike Tempo',
        description: 'Botines Nike Tempo Classic',
        price: 19.99,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 84730,
        category_id: 2,
        product_name: 'Botines Nike Tempo Inf',
        description: 'Botines Nike Tempo Classic para infantes',
        price: 14.99,
        status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 59029,
        category_id: 2,
        product_name: 'Botines Adidas FUT',
        description: 'Botines Adidas FUT Classic',
        price: 18.99,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 68720,
        category_id: 1,
        product_name: 'Mesa de Madera',
        description: 'Mesa de madera de pino.',
        price: 40.0,
        status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 19058,
        category_id: 1,
        product_name: 'Cortina Black Out',
        description: 'Cortina Black Out Blanca 1x0.80m.',
        price: 14.5,
        status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Product', null, {});
  },
};