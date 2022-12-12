'use strict';
const { Model } = require('sequelize');
const LOGSTYPE = require('../../enums/logs');

module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associations(models) {
      this.userAssociation = this.hasOne(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  };
  Log.init({
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
      references: {
        model: 'user',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM(LOGSTYPE.ACCESS, LOGSTYPE.DATA, LOGSTYPE.ERROR, LOGSTYPE.SYSTEM),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Log',
    tableName: 'log',
    timestamps: true
  });
  return Log;
};