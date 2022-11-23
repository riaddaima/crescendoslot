'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associations(models) {
      // define association here
      this.eventAssociation = this.belongsTo(models.Event, {
        foreignKey: 'eventId',
        as: 'event'
      });
      this.userAssociation = this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
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
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    hasCancelled: {
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