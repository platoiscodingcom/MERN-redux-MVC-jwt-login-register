const router = require('express').Router();
const passport = require('passport');

const userController = require ('../controllers/user');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/me', passport.authenticate('jwt', { session: false }), userController.me)

module.exports = router;