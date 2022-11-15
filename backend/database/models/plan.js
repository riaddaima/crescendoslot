'use strict';
const { Model } = require('sequelize');
const EVENTTYPE = require('../../enums/eventTypes');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associations(models) {
      // define association here
      this.packAssociation = this.hasMany(models.pack, {
        as: 'packs',
        foreignKey: 'planId'
      });
    }
  }
  Plan.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    eventType: {
      type: DataTypes.ENUM(EVENTTYPE.REGULAR, EVENTTYPE.SPECIAL, EVENTTYPE.COORPORATE, EVENTTYPE.CONCERT),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Plan',
    tableName: 'plan',
    timestamps: true
  })
  return Plan;
};