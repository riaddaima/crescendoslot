'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('event', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('event', { cascade: true });
  }
};