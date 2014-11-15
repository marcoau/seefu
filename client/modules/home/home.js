angular.module('app.home', [])
.controller('HomeController', ['$scope', function($scope) {
  $scope.userLogin = function(user) {
    console.log(user);
  };
  $scope.supplierLogin = function(supplier) {
    console.log(supplier);
  };
  $scope.userSignup = function(user) {
    console.log(user);
  };
  $scope.supplierSignup = function(supplier) {
    console.log(supplier);
  };

}]);
