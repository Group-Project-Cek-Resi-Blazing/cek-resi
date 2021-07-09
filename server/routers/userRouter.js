const router = require('express').Router()
const UserController = require('../controllers/UserController');
const { authentication } = require('../middlewares/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authentication, UserController.getProfile)
module.exports = router
