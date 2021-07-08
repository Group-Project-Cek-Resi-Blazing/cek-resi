const router = require('express').Router()
const userRouter = require('./userRouter')
const ongkirRouter = require('./ongkirRouter')
const resiRouter = require('./resiRouter')
const githubRouter = require('./githubLogin')


router.use('/user', userRouter)
router.use('/ongkir', ongkirRouter)
router.use('/resi', resiRouter)
router.use('/login/github', githubRouter)

module.exports = router
