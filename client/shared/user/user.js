// angular.module('app.user', [])
app.factory('UserFactory', ['$http', '$state', function($http, $state) {

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
    $http.post('/login', { user: user, type: 'user' })
      .success(function(data) {
        console.log(data);
        $state.go('user');
      })
      .error(function(err) {
        console.error(err);
      });
  };
  var supplierLogin = function(supplier) {
    $http.post('/login', { user: supplier, type: 'supplier' })
      .success(function(data) {
        console.log(data);
        $state.go('supplier');
      })
      .error(function(err) {
        console.error(err);
      });
  };

  return {
    userSignup: userSignup,
    supplierSignup: supplierSignup,
    userLogin: userLogin,
    supplierLogin: supplierLogin
  };

}]);
