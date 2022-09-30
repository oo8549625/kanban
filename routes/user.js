var express = require('express');
var router = express.Router();
var passport = require('passport');

const auth = require('../controllers/user');

router.post('/signup', auth.signup);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = router;