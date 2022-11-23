'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associations(models) {
      // define association here
      this.userAssociation = this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
  };
  Profile.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false,
    },
    isSubbedNewsletter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profile',
    timestamps: true
  });
  return Profile;
};