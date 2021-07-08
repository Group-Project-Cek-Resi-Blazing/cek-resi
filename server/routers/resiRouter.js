const router = require('express').Router()
const ResiController = require('../controllers/ResiController')

router.get('/', ResiController.chekResi)

module.exports = router
