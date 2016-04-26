angular.module('myApp').controller('mainCtrl', function($scope, mainService) {
  var getProducts = function() {
    mainService.getProducts().then(function(res) {
      console.log(res);
      $scope.products = res.data;
    })
  }
  getProducts();
})
