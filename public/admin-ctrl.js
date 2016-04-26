angular.module('myApp').controller('adminCtrl', function($scope, adminService) {
  var getProducts = function() {
    adminService.getProducts().then(function(res) {
      $scope.products = res.data;
    })
  }
  getProducts();

  $scope.addProduct = function(product) {
    adminService.addProduct(product).then(function(res) {
      getProducts();
      $scope.newProduct = {};
    })
  }

  $scope.updateProduct = function(id, product) {
    updateObject = {
      title: product.title,
      price: product.price,
      type: product.type
    }
    adminService.updateProduct(id, updateObject).then(function(res) {
      $scope.selectedProduct = {};
    })
    getProducts();

  }

  $scope.deleteProduct = function(id) {
    adminService.deleteProduct(id).then(function(res) {
      getProducts();
      $scope.selectedProduct = {};
    })
  }
})
