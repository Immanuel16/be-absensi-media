"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class riwayat_kas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riwayat_kas.init(
    {
      tanggal: DataTypes.STRING,
      item: DataTypes.STRING,
      total_item: DataTypes.STRING,
      price: DataTypes.NUMBER,
      totals: DataTypes.NUMBER,
      type: DataTypes.NUMBER,
      attachment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "riwayat_kas",
    }
  );
  return riwayat_kas;
};
