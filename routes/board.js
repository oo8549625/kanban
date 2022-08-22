var express = require('express');
var router = express.Router();
const { boardView, boardUserView } = require('../controllers/boardController');


/* GET home page. */
router.get('/', boardView);
router.get('/:userId/:boardName', boardUserView);
module.exports = router;