'use strict';
const { Model } = require('sequelize');
const EVENTTYPE = require('../../enums/eventTypes');

/**
 * @riaddaima
 * We should override the find/findAll for plan to return a finalPrice (price * (1- discount)) for every query.
 */

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associations(models) {
      // define association here
      // this.packAssociation = this.hasMany(models.pack, {
      //   as: 'packs',
      //   foreignKey: 'planId'
      // });
    }
  }
  Plan.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventType: {
      type: DataTypes.ENUM(EVENTTYPE.REGULAR, EVENTTYPE.SPECIAL, EVENTTYPE.COORPORATE, EVENTTYPE.CONCERT, EVENTTYPE.OTHER),
      defaultValue: EVENTTYPE.OTHER
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    numKids: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'Plan',
    tableName: 'plan',
    timestamps: true
  })
  return Plan;
};