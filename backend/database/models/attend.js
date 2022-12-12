'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attend extends Model {
    static associations(models) {
      this.eventAssociation = this.belongsTo(models.Booking, {
        foreignKey: 'eventId',
        as: 'booking', 
        foreignKey: 'userId',
        as: 'user'
      });
      this.eventAssociation = this.belongsTo(models.Booking, {
        foreignKey: 'eventId',
        as: 'booking'
      });
      this.userAssociation = this.belongsTo(models.Dependent, {
        foreignKey: 'dependantId',
        as: 'dependent'
      });
    }
  };
  Attend.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    dependantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dependent',
        key: 'id'
      }
    },
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
        model: 'user',
        key: 'id'
      }

    }
    // still need to create the migration for attend. 
  }, {
    sequelize,
    modelName: 'Attend',
    tableName: 'attend',
    timestamps: false
  });
  return Attend;
};