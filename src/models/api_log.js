"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class api_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  api_log.init(
    {
      tx_id: DataTypes.STRING,
      url: DataTypes.STRING,
      status: DataTypes.INTEGER,
      body: DataTypes.JSON,
      message: DataTypes.STRING,
      created_by: DataTypes.STRING,
      created_from: DataTypes.STRING,
      updated_by: DataTypes.STRING,
      updated_from: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "api_log",
    }
  );
  return api_log;
};
