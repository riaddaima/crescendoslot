'use strict';
const PLANTYPES = require('../../enums/planTypes');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plan', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      type: {
        type: Sequelize.ENUM(PLANTYPES.FEE, PLANTYPES.PACK),
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      numKids: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plan', { cascade: true });
  }
};