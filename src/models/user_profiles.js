"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_profiles.init(
    {
      full_name: DataTypes.STRING,
      birth_date: DataTypes.STRING,
      phone: DataTypes.STRING,
      bank_id: DataTypes.STRING,
      bank_acc_num: DataTypes.STRING,
      bank_acc_name: DataTypes.STRING,
      province: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      subdistrict: DataTypes.STRING,
      address: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      kom: DataTypes.INTEGER,
      hmc: DataTypes.INTEGER,
      baptis: DataTypes.INTEGER,
      orientasi: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      photo_public: DataTypes.STRING,
      status: DataTypes.INTEGER,
      role: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_profiles",
      defaultScope: {
        attributes: {
          exclude: [
            "password",
            "createdBy",
            "createdFrom",
            "createdAt",
            "updatedBy",
            "updatedFrom",
            "updatedAt",
          ],
        },
      },
      scopes: {
        withPassword: {
          attributes: {
            include: ["password"],
          },
        },
        forBirthday: {
          attributes: {
            exclude: [
              "password",
              "createdBy",
              "createdFrom",
              "createdAt",
              "updatedBy",
              "updatedFrom",
              "updatedAt",
              "province",
              "district",
              "city",
              "subdistrict",
              "address",
              "kom",
              "hmc",
              "baptis",
              "status",
              "role",
              "email",
              "phone",
              "orientasi",
              "bank_id",
              "bank_acc_num",
              "photo",
              "bank_acc_name",
            ],
          },
        },
        forAbsence: {
          attributes: {
            exclude: [
              "password",
              "createdBy",
              "createdFrom",
              "createdAt",
              "updatedBy",
              "updatedFrom",
              "updatedAt",
              "province",
              "district",
              "city",
              "subdistrict",
              "address",
              "full_name",
              "kom",
              "hmc",
              "baptis",
              "status",
              "role",
              "email",
              "phone",
              "orientasi",
              "bank_id",
              "bank_acc_num",
              "photo",
              "bank_acc_name",
              "birth_date",
              "id",
            ],
          },
        },
      },
    }
  );
  return user_profiles;
};
