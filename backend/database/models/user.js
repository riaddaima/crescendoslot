'use strict';
const { Model } = require('sequelize');
const ROLE = require('../../enums/roles');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associations(models) {
      // define association here
      this.eventAssociation = this.hasMany(models.Event, {
        through: models.Booking,
        as: 'events',
        foreignKey: 'userId'
      });
      this.dependentAssociation = this.hasMany(models.Dependent, {
        as: 'dependents',
        foreignKey: 'userId'
      });
      this.profileAssociation = this.hasOne(models.Profile, {
        as: 'profile',
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM(ROLE.MANAGER, ROLE.PARENT),
      defaultValue: ROLE.PARENT
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: true
  });
  return User;
};