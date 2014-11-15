var app = angular.module('app', [
  'ui.router',
  'app.user',

  'app.home',
  'app.supplier'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/modules/home/home.html',
      controller: 'HomeController'
    })
    .state('user', {
      url: '/user',
      templateUrl: '/modules/user/user.html',
      controller: 'UserController'
    })
    .state('supplier', {
      url: '/supplier',
      templateUrl: '/modules/supplier/supplier.html',
      controller: 'SupplierController'
    });
  $urlRouterProvider.otherwise('/');
}])
.controller('AppController', ['$scope', function($scope) {
  $scope.socket = io.connect('/');
  $scope.socket.emit('hello', {data: 'hey yo'});
}]);
