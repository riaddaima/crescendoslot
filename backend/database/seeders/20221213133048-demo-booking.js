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
    await queryInterface.bulkInsert('booking', [{
      eventId: 1,
      userId: '105767007048062418413',
      hasCancelled: false,
      isWaitlist: false
    }, {
      eventId: 2,
      userId: '105767007048062418413',
      hasCancelled: true,
      isWaitlist: false
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('booking', null, {
      truncate: true,
      cascade: true
    });
  }
};
