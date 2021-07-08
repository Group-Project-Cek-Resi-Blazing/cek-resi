'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  City.init({
    province_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    city_name: DataTypes.STRING,
    postal_code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};