'use strict';
const DEPENDENT = require('../../enums/dependents');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dependent', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM(DEPENDENT.SPOUSE, DEPENDENT.KID),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dependent', { cascade: true });
  }
};