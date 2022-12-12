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
      this.attendanceAssociation = this.hasMany(models.Attendance, {
        as: 'attendances',
        foreignKey: 'dependentId'
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
      type: DataTypes.STRING,
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

  }, {
    sequelize,
    modelName: 'Dependent',
    tableName: 'dependent',
    timestamps: true
  });
  return Dependent;
};