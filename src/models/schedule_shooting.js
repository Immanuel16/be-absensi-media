"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule_shooting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  schedule_shooting.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      phone: DataTypes.STRING,
      division: DataTypes.STRING,
      has_done: DataTypes.BOOLEAN,
      request_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "schedule_shooting",
      underscored: true,
    }
  );
  return schedule_shooting;
};
