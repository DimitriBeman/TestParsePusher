'use strict';

angular.module('bookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/proveedores/:name',{
        templateUrl:'app/proveedores/proveedor.html',
        controller:'ProveedorCtrl'
      })
      .when('/proveedores', {
        templateUrl: 'app/proveedores/proveedores.html',
        controller: 'ProveedoresCtrl'
      })
  });