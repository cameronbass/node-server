var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js')

app.get("/about", middleware.requireAuthentication, middleware.logger, function(req, res) {
  res.send("Another Route")
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT);
