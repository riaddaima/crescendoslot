'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associations(models) {
      // define association here
      // this.eventAssociation = this.hasOne(models.Event, {
      //   foreignKey: 'eventId',
      //   as: 'events',
      // })
    }
  }
  Booking.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'event',
      //   key: 'id'
      // }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    hasCancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'booking',
    timestamps: true,
    freezeTableName: true
  })
  return Booking;
};