'use strict';
const LOGSTYPE = require('../../enums/logs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log', {
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
        references: {
          model: 'user',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM(LOGSTYPE.ACCESS, LOGSTYPE.DATA, LOGSTYPE.ERROR, LOGSTYPE.SYSTEM),
        allowNull: false,
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('log', { cascade: true });
  }
};
