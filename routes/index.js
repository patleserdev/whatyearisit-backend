var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res, next) {

  let date = new Date()

  res.json({year : date.getFullYear()})


});

module.exports = router;
