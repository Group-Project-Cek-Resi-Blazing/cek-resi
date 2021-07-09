const {User, Resi} = require('../models')
const {decode} = require('../helper/jwt')


const authentication = async (req, res, next)=>{
    try{
        if(!req.headers.access_token){
            throw({name: 'NOT_LOGIN'})
        }
        const access_token = req.headers.access_token
        const {id} = decode(access_token)
        const getUser = await User.findByPk(id)
    
        if(!getUser){
            throw({name: 'AUTHENTICATION_FAILED'})
        }
    
        req.user = getUser
        next()
    }
    catch(err){
        next(err)
    }

}

const authorization = (req, res, next)=>{
    const {id} = req.params
    const userId = req.user.id
    Resi.findOne({
        where:{
            id, 
            userId
        }
    })
    .then(result=>{
        if(!result){
            throw({name: 'RESI_NOT_FOUND'})
        }
        req.resi = result
        next()
    })
    .catch(err=>{
        next(err)
    })

}

module.exports = {authentication, authorization}