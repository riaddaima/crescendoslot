'use strict';
const { Model } = require('sequelize');
const EVENTTYPE = require('../../enums/eventTypes');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.userAssociation = this.belongsToMany(models.User, {
        through: models.Booking,
        foreignKey: 'eventId'
      });
      this.userAttendAssociation = this.belongsToMany(models.User, {
        through: models.Attend,
        foreignKey: 'eventId'
      });
      // this.attendAssociation = this.hasMany
      // this.attendDependentAssociation = this.belongsToMany(models.Dependent, {
      //   through: models.Attend,
      //   as: 'events',
      //   foreignKey: {
      //     name: 'eventId',
      //     type: DataTypes.INTEGER,
      //     primaryKey: true,
      //   }
      // });
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
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(EVENTTYPE.REGULAR, EVENTTYPE.SPECIAL, EVENTTYPE.COORPORATE, EVENTTYPE.CONCERT, EVENTTYPE.OTHER),
      defaultValue: EVENTTYPE.OTHER
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
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: true
  });
  return Event;
};