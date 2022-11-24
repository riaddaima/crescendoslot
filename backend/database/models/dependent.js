'use strict';
const { Model } = require('sequelize');
const DEPENDENT = require('../../enums/dependents');
module.exports = (sequelize, DataTypes) => {
  class Dependent extends Model {
    static associations(models) {
      this.userAssociation = this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  };
  Dependent.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      /**
       * @riaddaima
       * Maybe add this into user model too.
       */
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(DEPENDENT.SPOUSE, DEPENDENT.KID),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dependent',
    tableName: 'dependent',
    timestamps: true
  });
  return Dependent;
};