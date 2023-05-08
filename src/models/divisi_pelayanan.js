"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class divisi_pelayanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  divisi_pelayanan.init(
    {
      division_name: DataTypes.STRING,
      division_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "divisi_pelayanan",
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    }
  );
  return divisi_pelayanan;
};
