'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('plan', [{
      type: 'fee',
      title: 'Fees of regular class',
      price: 150.00,
      numKids: 1
    }, {
      type: 'fee',
      title: 'Fees of special class',
      price: 180.00,
      numKids: 1
    }, {
      type: 'fee',
      title: 'Regular class (includes both parents)',
      price: 280.00,
      numKids: 2
    }, {
      type: 'fee',
      title: 'Special class (includes both parents)',
      price: 360.00,
      numKids: 2
    }, {
      type: 'pack',
      title: '3 classes pack',
      price: 450.00,
      numKids: 1
    }, {
      type: 'pack',
      title: '6 classes pack FAMILY CARD (2 Months membership)',
      price: 800.00,
      numKids: 1
    }, {
      type: 'pack',
      title: '12 classes pack FAMILY CARD (4 Months membership)',
      price: 1500.00,
      numKids: 1
    }, {
      type: 'pack',
      title: '6 classes pack for siblings',
      price: 1500.00,
      numKids: 2
    }, {
      type: 'pack',
      title: '6 classes pack for siblings',
      price: 2000.00,
      numKids: 3 
    }, {
      type: 'pack',
      title: '12 classes pack for siblings',
      price: 2700.00,
      numKids: 2
    }, {
      type: 'pack',
      title: '12 classes pack for siblings',
      price: 3700.00,
      numKids: 3
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('plan', null, {
      truncate: true,
      cascade: true
    })
  }
};
