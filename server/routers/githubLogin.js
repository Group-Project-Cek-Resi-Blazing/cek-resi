const router = require('express').Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')

const { User } = require('../models')

const client_id = process.env.GITHUB_CLIENT_ID
const client_secret = process.env.GITHUB_CLIENT_SECRET

router.get('/', (req, res) => {
  const redirect_uri = 'http://localhost:3000/login/github/callback'
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
  )
})

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await axios('https://github.com/login/oauth/access_token', {
    method: 'POST',
    data: {
      client_id,
      client_secret,
      code,
    },
  })
  const text = request.data
  const params = new URLSearchParams(text)
  return params.get('access_token')
}

async function fetchGitHubUser(token) {
  const request = await axios('https://api.github.com/user', {
    headers: {
      Authorization: 'token ' + token,
    },
  })

  return await request.data
}

router.get('/callback', async (req, res, next) => {
  const code = req.query.code

  try {
    const access_token = await getAccessToken({
      code,
      client_id,
      client_secret,
    })
    const githubUser = await fetchGitHubUser(access_token)
    const email = githubUser.email
    const user = await User.findOne({ where: { email } })

    if (!user) {
      const newUser = await User.create({
        email,
        password: process.env.DEFAULT_PASSWORD,
        link_avatar: githubUser.avatar_url,
      })

      const token = jwt.sign(
        {
          id: newUser.id,
          email: newUser.email,
          link_avatar: newUser.link_avatar,
        },
        process.env.TOKEN_SECRET
      )

      return res
        .status(201)
        .json({
          id: newUser.id,
          access_token: token,
          email: newUser.email,
          link_avatar: newUser.link_avatar,
        })
    }

    const clientPayload = {
      id: user.id,
      email: user.email,
      link_avatar: user.link_avatar,
    }

    const token = jwt.sign(clientPayload, process.env.TOKEN_SECRET)

    return res
      .status(200)
      .json({
        id: user.id,
        access_token: token,
        email,
        link_avatar: clientPayload.link_avatar,
      })
  } catch (err) {
    next({ msg: 'loginError' })
  }
})

module.exports = router
