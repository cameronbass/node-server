var express = require('express');
var app = express();

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log("private route hit!");
    next();
  },
  logger: function(req, res, next) {
    var date = new Date().toString()
    console.log('date: ' + date + req.method);
    next();
  }
};

// app.use(middleware.requireAuthentication);

app.get("/about", middleware.requireAuthentication, middleware.logger, function(req, res) {
  res.send("Another Route")
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);
