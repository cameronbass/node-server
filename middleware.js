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

module.exports = middleware;
