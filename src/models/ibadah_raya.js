'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ibadah_raya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ibadah_raya.init({
    ir_name: DataTypes.STRING,
    ir_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ibadah_raya',
  });
  return ibadah_raya;
};