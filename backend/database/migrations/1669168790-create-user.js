'use strict';
const ROLE = require('../../enums/roles');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(ROLE.MANAGER, ROLE.PARENT),
        defaultValue: ROLE.PARENT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user', { cascade: true });
  }
};