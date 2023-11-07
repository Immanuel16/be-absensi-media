'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class natal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  natal.init({
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    origin_church: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'natal',
  });
  return natal;
};