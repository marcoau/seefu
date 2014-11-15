// angular.module('app.user', [])
app.factory('UserFactory', ['$http', function($http) {

  var userSignup = function(user) {
    $http.post('/signup', { user: user, type: 'user' })
      .success(function(data) {
        console.log(data);
      })
      .error(function(err) {
        console.error(err);
      });
  };
  var supplierSignup = function(supplier) {
    $http.post('/signup', { user: supplier, type: 'supplier' })
      .success(function(data) {
        console.log(data);
      })
      .error(function(err) {
        console.error(err);
      });
  };
  var userLogin = function(user) {

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
