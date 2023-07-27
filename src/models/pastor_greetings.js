'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pastor_greetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pastor_greetings.init({
    title: DataTypes.STRING,
    episode: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    video_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pastor_greetings',
  });
  return pastor_greetings;
};