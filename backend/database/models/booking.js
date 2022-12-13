'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associations(models) {
      this.eventAssociation = this.belongsTo(models.Event, {
        foreignKey: 'eventId',
        as: 'event'
      });
      this.userAssociation = this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      this.dependentAssociation = this.hasMany(models.Dependent, {
        through: models.Attend,
        as: 'dependents',
        foreignKey: 'dependentId'
      })
    }
  };
  Booking.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
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
    },
    hasCancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isWaitlist:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'booking',
    timestamps: true
  });
  return Booking;
};