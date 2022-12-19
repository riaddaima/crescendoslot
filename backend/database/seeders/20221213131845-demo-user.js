'use strict';

const ROLE = require('../../enums/roles');

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
    await queryInterface.bulkInsert('user', [{
      id: '105767007048062418413',
      firstName: 'Riad',
      lastName: 'Daima',
      email: 'riaddaima1@gmail.com',
      phoneNumber: '+212693502372',
      role: ROLE.PARENT,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {
      truncate: true,
      cascade: true
    });
  }
};
