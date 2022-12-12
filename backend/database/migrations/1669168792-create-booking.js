'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('booking', {
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'event',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      hasCancelled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }, 
      isWaitlist: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('booking', { cascade: true });
  }
};