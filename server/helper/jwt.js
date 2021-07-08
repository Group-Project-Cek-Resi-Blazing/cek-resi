const jwt = require('jsonwebtoken')

const access_token = (payload) =>{
    return jwt.sign(payload, process.env.TOKEN_SECRET)
}

const decode = (access_token)=>{
    return jwt.verify(access_token, process.env.TOKEN_SECRET)
}

module.exports = {access_token, decode}