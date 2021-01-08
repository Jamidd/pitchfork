var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simulate', { title: 'Express' });
});
router.get('/log', function(req, res, next) {
  res.render('log', { title: 'Express' });
});

module.exports = router;
