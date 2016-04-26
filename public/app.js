angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'main.html',
        controller: 'mainCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'admin.html',
        controller: 'adminCtrl'
      })
  })
