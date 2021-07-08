const router = require('express').Router()
const OngkirController = require('../controllers/OngkirController')

router.post('/', OngkirController.getOngkir)

module.exports = router
