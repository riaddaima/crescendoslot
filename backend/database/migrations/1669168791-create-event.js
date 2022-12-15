'use strict';
const EVENTTYPE = require('../../enums/eventTypes');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('event', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM(EVENTTYPE.REGULAR, EVENTTYPE.SPECIAL, EVENTTYPE.COORPORATE, EVENTTYPE.CONCERT, EVENTTYPE.OTHER),
        defaultValue: EVENTTYPE.OTHER
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      minAge: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxAge: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      venue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('event', { cascade: true });
  }
};