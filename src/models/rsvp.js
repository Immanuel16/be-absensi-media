'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rsvp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rsvp.init({
    name: DataTypes.STRING,
    join: DataTypes.BOOLEAN,
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rsvp',
  });
  return rsvp;
};