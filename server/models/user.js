'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Resi, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          notEmpty: {
            args: true,
            msg: 'email must not be empty',
          },
          notNull: {
            args: true,
            msg: 'email must not be null',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'password must not be empty',
          },
          notNull: {
            args: true,
            msg: 'password must not be null',
          },
        },
      },
      link_avatar: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'link_avatar must not be empty',
          },
          notNull: {
            args: true,
            msg: 'link_avatar must not be null',
          },
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user, options) => {
          const salt = bcrypt.genSaltSync(10)
          const hash = bcrypt.hashSync(user.password, salt)
          user.password = hash
        },
      },
      modelName: 'User',
    }
  )
  return User
}
