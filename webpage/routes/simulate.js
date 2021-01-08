var express = require('express');
var router = express.Router();
// const spawn = require("child_process").spawn;


/* GET home page. */

router.get('/log', function (req, res, next) {
  res.render('log', { title: 'Express' });
});

router.post('/sim', function (req, res) {
  res.render('sim', { title: 'Express', address: req.body.address, escobajo: req.body.cantidad_escobajo })
});

router.post('/', function (req, res) {

  res.render('simulate', { title: 'Express' });

  // var dataToSend;
  // // spawn new child process to call the python script
  // const python = spawn('python3', ["./public/python/distancias.py", 1, 2, 3, 4]);
  // // collect data from script
  // python.stdout.on('data', function (data) {
  //   dataToSend = data.toString();
  // });
  // // in close event we are sure that stream from child process is closed
  // python.on('close', (code) => {
  //   // send data to browser
  //   console.log(dataToSend);
  //   res.render('simulate', { title: 'Express', lat1: req.body.lat1, lon1: req.body.lon1, lat2: req.body.lat2,  lon2: req.body.lon2, escobajo: req.body.cantidad_escobajo, distancia: dataToSend})
  // });

});

module.exports = router;
