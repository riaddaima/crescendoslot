'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('attend', {
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'event',
          key: 'id'
        }
      },
      dependentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'dependent',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
        model: 'user',
        key: 'id'
      }
    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('attend', { cascade: true });
  }
};
