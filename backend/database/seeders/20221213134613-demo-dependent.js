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
    await queryInterface.bulkInsert('dependent', [{
      userId: '105767007048062418413',
      firstName: 'El Mehdi',
      lastName: 'El Boustani',
      dob: new Date('2017-01-01'),
      gender: 'M',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: '105767007048062418413',
      firstName: 'Alae',
      lastName: 'Hidad',
      dob: new Date('2021-01-01'),
      gender: 'F',
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
    await queryInterface.bulkDelete('dependent', null, {
      truncate: true,
      cascade: true
    });
  }
};
