const router = require('express').Router()
const ResiController = require('../controllers/ResiController')

router.get('/resi', ResiController.chekResi)

module.exports = router
