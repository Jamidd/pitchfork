var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simulate', { title: 'Express',  address: "hola"});
});

router.post('/', function(req, res){
  console.log(req.body);
  res.render('simulate', {title: 'Express', address: req.body.direccion, 
  escobajo: req.body.cantidad_escobajo, costo: req.body.costo_empaquetamiento})
})

module.exports = router;
