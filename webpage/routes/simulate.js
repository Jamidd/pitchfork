var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  res.render('simulate', { title: 'Express', address: req.body.address});
});

router.get('/log', function(req, res, next) {
  res.render('log', { title: 'Express'});
});

module.exports = router;
