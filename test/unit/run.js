
var tape = require('tape');
var common = {};

var tests = [
  require('./controller/index')
];

tests.map(function(t) {
  t.all(tape, common);
});