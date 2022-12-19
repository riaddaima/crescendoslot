'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // this.belongsTo(models.User, {
      //   as: 'profile'
      // });
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
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // }
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profile',
    timestamps: true
  });
  return Profile;
};