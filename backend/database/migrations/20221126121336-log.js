'use strict';
const LOGSTYPE = require('../../enums/logs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
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
