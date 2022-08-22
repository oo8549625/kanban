var express = require('express');
var router = express.Router();
const passport = require('passport');
const { registerView, loginView } = require('../controllers/loginController');
const { indexView } = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexView);
router.get('/register', registerView);
router.get('/login', loginView);
module.exports = router;