const router = require('express').Router()
const userRouter = require('./userRouter')
const ongkirRouter = require('./ongkirRouter')
const resiRouter = require('./resiRouter')

router.use('/user', userRouter)
router.use('/ongkir', ongkirRouter)
router.use('/resi', resiRouter)

module.exports = router