"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class absensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  absensi.init(
    {
      tanggal: DataTypes.STRING,
      ir: DataTypes.STRING,
      kom1: DataTypes.STRING,
      kom2: DataTypes.STRING,
      lighting: DataTypes.STRING,
      cam1: DataTypes.STRING,
      cam2: DataTypes.STRING,
      cam3: DataTypes.STRING,
      switcher: DataTypes.STRING,
      photo: DataTypes.STRING,
      sosmed: DataTypes.STRING,
      late_person: DataTypes.STRING,
      sound1: DataTypes.STRING,
      sound2: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "absens",
    }
  );
  return absensi;
};
