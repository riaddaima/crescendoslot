'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.removeColumn('dependent', 'type');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('dependent', {cascade: true});
  }
};
