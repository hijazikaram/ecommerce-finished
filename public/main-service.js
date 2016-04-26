angular.module('myApp').service('mainService', function($http) {
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/products'
    })
  }
})
