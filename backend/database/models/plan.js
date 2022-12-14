'use strict';
const { Model } = require('sequelize');
const PLANTYPES = require('../../enums/planTypes');

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associations(models) {
      // define association here
      // for now, plan is not linked to any entity yet
    }
  };
  Plan.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM(PLANTYPES.FEE, PLANTYPES.PACK),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
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
  });
  return Plan;
};