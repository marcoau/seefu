var User = require('./user');

module.exports = function(app) {

  app.post('/signup', User.signup);
  // app.post('/login', User.login);

};
