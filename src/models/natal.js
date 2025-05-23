"use strict";
const { Model } = require("sequelize");
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
  natal.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      birth_date: DataTypes.STRING,
      origin_church: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      type: DataTypes.INTEGER,
      ir: DataTypes.STRING,
      year: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "natal",
    }
  );
  return natal;
};
