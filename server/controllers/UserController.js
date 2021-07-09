const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body

    User.create({
      email,
      password,
      link_avatar: `https://robohash.org/${email}`,
    })
      .then((user) => {
        res.status(201).json({
          data: {
            id: user.id,
            email: user.email,
            link_avatar: user.link_avatar,
          },
        })
      })
      .catch((err) => {
        next(err)
      })
  }

  static login(req, res, next) {
    const { email, password } = req.body

    User.findOne({ where: { email } })
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const payload = {
            id: user.id,
            email,
            link_avatar: user.link_avatar,
          }
          const access_token = jwt.sign(payload, process.env.TOKEN_SECRET)
          return res
            .status(200)
            .json({ id: user.id, access_token, email, link_avatar: user.link_avatar })
        }
        throw { name: 'login_failed' }
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = UserController
