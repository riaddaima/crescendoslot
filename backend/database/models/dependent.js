'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependent extends Model {
    static associate(models) {
      this.userAssociation = this.belongsTo(models.User);
      // this.attendAssociation = this.hasMany(models.Attend, {
      //   as: 'attendances',
      //   foreignKey: 'dependentId'
      // });
      // this.attendEventAssociation = this.belongsToMany(models.Event, {
      //   through: models.Attend,
      //   as: 'dependentattendances',
      //   foreignKey: {
      //     name: 'eventId',
      //     type: DataTypes.INTEGER,
      //     primaryKey: true
      //   },
      // });
      // this.attendUserAssociation = this.belongsTo(models.User, {
      //   through: models.Attend,
      //   as: 'user',
      //   foreignKey: {
      //     name: 'userId',
      //     type: DataTypes.STRING,
      //     primaryKey: true
      //   },
      // });
    }
  };
  Dependent.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // },
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
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
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