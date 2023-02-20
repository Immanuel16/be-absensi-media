'use strict';
const {
  Model
} = require('sequelize');
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
  user_profiles.init({
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    photo: DataTypes.STRING,
    kom: DataTypes.INTEGER,
    hmc: DataTypes.INTEGER,
    baptis: DataTypes.INTEGER,
    orientasi: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    password: DataTypes.STRING,
    bank_id: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_profiles',
    defaultScope: {
      attributes: {
        exclude: ['password', 'createdBy', 'createdFrom', 'createdAt', 'updatedBy', 'updatedFrom', 'updatedAt'],
      },
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ['password'],
        },
      },
    },
  });
  return user_profiles;
};