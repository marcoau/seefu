angular.module('app', [
  'ui.router',
  'app.home'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/modules/home/home.html',
      controller: 'HomeController'
    });
  $urlRouterProvider.otherwise('/');
}])
.controller('AppController', ['$scope', function($scope) {

}]);
