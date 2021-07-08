const router = require('express').Router()
const userRouter = require('./userRouter')
const ongkirRouter = require('./ongkirRouter')
const resiRouter = require('./resiRouter')
const githubRouter = require('./githubLogin')
const { authentication } = require('../middlewares/auth')

router.use('/user', userRouter)
// router.use(authentication)
router.use('/ongkir', ongkirRouter)
router.use('/resi', resiRouter)
router.use('/login/github', githubRouter)

module.exports = router
