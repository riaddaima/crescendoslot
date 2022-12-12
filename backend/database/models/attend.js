'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attend extends Model {
    static associations(models) {
      this.bookingEventAssociation = this.belongsTo(models.Booking, {
        foreignKey: 'eventId',
        as: 'event'
      });
      this.bookingUserAssociation = this.belongsTo(models.Booking, {
        foreignKey: 'userId',
        as: 'user'
      });
      this.dependentAssociation = this.belongsTo(models.Dependent, {
        foreignKey: 'dependentId',
        as: 'dependent'
      });
    }
  };
  Attend.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    dependentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dependent',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
    // still need to create the migration for attend. 
  }, {
    sequelize,
    modelName: 'Attend',
    tableName: 'attend',
    timestamps: false
  });
  return Attend;
};