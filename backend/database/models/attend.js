'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attend extends Model {
    static associate(models) {
      this.dependentAssociation = this.belongsTo(models.Dependent, {
        as: 'dependent'
      });
      this.eventAssociation = this.belongsTo(models.Event, {
        as: 'event'
      });
      this.userAssociation = this.belongsTo(models.User, {
        as: 'user'
      });
    }
  };
  Attend.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'event',
      //   key: 'id'
      // }
    },
    dependentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'dependent',
      //   key: 'id'
      // }
    },
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    }
  }, {
    sequelize,
    modelName: 'Attend',
    tableName: 'attend',
    timestamps: true
  });
  return Attend;
};