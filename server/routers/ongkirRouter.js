const router = require('express').Router()
const OngkirController = require('../controllers/OngkirController')

router.post('/', OngkirController.getOngkir)
router.get('/', OngkirController.getCities)

module.exports = router
