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
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(ROLE.MANAGER, ROLE.PARENT),
        defaultValue: ROLE.PARENT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};