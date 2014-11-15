var mongoose = require('mongoose');
var Config = require('./config');

mongoose.connect(Config.mongo.uri);
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  hashed: String,
//   points: Number
});
var User = mongoose.model('User', userSchema);

var supplierSchema = new Schema({
  username: String,
  hashed: String,
//   points: Number
});
var Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = {
  User: User,
  Supplier: Supplier
};
