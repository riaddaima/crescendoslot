'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attend extends Model {
    static associate(models) {
    }
  };
  Attend.init({}, {
    sequelize,
    modelName: 'Attend',
    tableName: 'attend',
    timestamps: true
  });
  return Attend;
};