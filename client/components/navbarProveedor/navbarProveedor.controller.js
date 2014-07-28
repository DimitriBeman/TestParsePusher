'use strict';

angular.module('bookingApp')
  .controller('NavbarProveedorCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'HomeProveedor',
      'link': '/proveedores'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });