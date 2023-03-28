"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recruitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recruitment.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      job: DataTypes.STRING,
      age: DataTypes.INTEGER,
      role: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recruitment",
      underscored: true,
    }
  );
  return recruitment;
};
