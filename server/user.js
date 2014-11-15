var bcrypt = require('bcrypt-nodejs');

var Config = require('./config');
var Db = require('./db');

var signup = function(req, res) {
  var type = req.body.type;
  var username = req.body.user.username;
  var password = req.body.user.password;
  // separate between user and supplier
  if(type === 'user') {
    var dbSchema = Db.User;    
  } else if(type === 'supplier') {
    var dbSchema = Db.Supplier;
  } else {
    res.sendStatus(404);
  }

  dbSchema.find({ username: username },
    function(err, users) {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else if(users.length === 0) {
        // username not taken
        bcrypt.hash(password, null, null, function(err1, hashed) {
          var newAccount = new dbSchema({
            username: username,
            hashed: hashed,
          });
          newAccount.save(function(err2, user) {
            if(err2) {
              console.error(err2);
              res.sendStatus(500);
            } else {
              res.send({ success: true });
            }
          });
        });
      } else {
        // username taken
        res.send({ success: false });
      } 
    });
};

var login = function(req, res) {
  var type = req.body.type;
  var username = req.body.user.username;
  var password = req.body.user.password;
  // separate between user and supplier
  if(type === 'user') {
    var dbSchema = Db.User;    
  } else if(type === 'supplier') {
    var dbSchema = Db.Supplier;
  } else {
    res.sendStatus(404);
  }

  console.log(req.body);

  dbSchema.findOne({ username: username },
    function(err, user) {
      if(err) {
        console.error(err);
        res.sendStatus(500);
      } else if(user) {
        // username found
        bcrypt.compare(password, user.hashed, function(err1, match) {
          if(match) {
            res.send({ success: true });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        // username not found
        res.sendStatus(401);
      }
    });
};

module.exports = {
  signup: signup,
  login: login
};
