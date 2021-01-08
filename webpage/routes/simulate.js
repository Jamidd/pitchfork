var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/log', function(req, res, next) {
  res.render('log', { title: 'Express'});
});

router.post('/', function(req, res){
  console.log(req.body);
  res.render('simulate', {title: 'Express', address: req.body.direccion, 
  escobajo: req.body.cantidad_escobajo, costo: req.body.costo_empaquetamiento})
})

module.exports = router;
