"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JumatAgung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JumatAgung.init(
    {
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      year: DataTypes.STRING,
      status: DataTypes.STRING,
      type: DataTypes.INTEGER,
      ir: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "jumat_agung",
    }
  );
  return JumatAgung;
};
