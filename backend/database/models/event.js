'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associations(models) {
      this.userAssociation = this.hasMany(models.User, {
        through: models.Booking,
        as: 'users',
        foreignKey: 'eventId'
      });
    }
  };
  Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minAge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxAge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING
    }
    // What about the evt type
    
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: true
  });
  return Event;
};