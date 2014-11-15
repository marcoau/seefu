// angular.module('app.user', [])
app.factory('UserFactory', ['$http', function($http) {

  var userSignup = function(user) {
    console.log('hello');
  };
  var userLogin = function(user) {

  };
  var supplierSignup = function(supplier) {

  };
  var supplierLogin = function(supplier) {

  };

  return {
    userSignup: userSignup,
    userLogin: userLogin,
    supplierSignup: supplierSignup,
    supplierLogin: supplierLogin
  };

}]);
