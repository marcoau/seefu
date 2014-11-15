angular.module('app.home', [])
.controller('HomeController', ['$scope', 'UserFactory', function($scope, UserFactory) {
  $scope.userLogin = UserFactory.userLogin;
  $scope.supplierLogin = UserFactory.supplierLogin;
  $scope.userSignup = UserFactory.userSignup;
  $scope.supplierSignup = UserFactory.supplierSignup;
}]);
