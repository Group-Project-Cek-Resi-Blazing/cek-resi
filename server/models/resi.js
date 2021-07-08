'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Resi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Resi.init(
    {
      awb: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'awb must not be empty',
          },
          notNull: {
            args: true,
            msg: 'awb must not be null',
          },
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: 'userId must not be empty',
          },
          notNull: {
            args: true,
            msg: 'userId must not be null',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Resi',
    }
  )
  return Resi
}
