'use strict';
const EVENTTYPE = require('../../enums/eventTypes');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plan', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventType: {
        type: Sequelize.ENUM(EVENTTYPE.REGULAR, EVENTTYPE.SPECIAL, EVENTTYPE.COORPORATE, EVENTTYPE.CONCERT, EVENTTYPE.OTHER),
        defaultValue: EVENTTYPE.OTHER
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      discount: {
        type: Sequelize.FLOAT,
        defaultValue: 0
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