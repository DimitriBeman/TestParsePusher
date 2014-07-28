'use strict';

angular.module('bookingApp').controller('ProveedoresCtrl', function($scope,$location, Pusher, parseQuery) {
    
  $scope.proveedor = { name: "SrChorizon"};
  $scope.proveedores = [];
  var query = new Parse.Query("Proveedor");
  parseQuery.find(query).then(function(results) {
    console.dir(results);
    $scope.proveedores = _.map(results, function(r) {
      return {
        nombre: r.attributes.nombre,
        id: r.id,
        selected: false
      };
    });
  }, function(error) {
    alert(JSON.stringify(error));
  });
  
  
  $scope.seleccionar = function(item){
      $location.path("proveedores/"+item.nombre);
  }
});
