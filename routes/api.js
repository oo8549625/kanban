var express = require('express');
var router = express.Router();
const { boardAPIs } = require('../controllers/boardController');


/* GET home page. */
router.get('/board', boardAPIs);
module.exports = router;