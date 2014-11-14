var express = require('express');

var app = express();
app.use(express.static('./client'));
// basic request logger
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

app.listen(process.env.PORT || 8000);
console.log('C-Fu @ :8000');
