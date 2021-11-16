var express = require('express');
var FibonacciService = require('./Services/FibonacciService')

var app = express();

app.get('/fibonacci/:nthIn', function (req, res) {
  let start = performance.now();
  var nth = FibonacciService.getNthNumberInSequence(parseInt(req.params.nthIn))
  res.send('The answer is ' + nth);
  let end = performance.now();
  
  console.log('This shit takes ${end-start} seconds to calculate the ${req.params.nthIn}th Fibonacci number!');
});

app.get('/', function (req, res) {  
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Fibonacci App listening on port 3000!');
});