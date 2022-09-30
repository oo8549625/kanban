var express = require('express');
var router = express.Router();
const view = require('../controllers/index');

/* GET home page. */
router.get('/', view.indexView);
router.get('/login', view.loginView);
router.get('/register', view.registerView);
router.get('/board', view.boardView);
router.get('/board/:userId/:boardName', view.boardUserView);
module.exports = router;