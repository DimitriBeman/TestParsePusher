'use strict';

angular.module('bookingApp').controller('ProveedorCtrl', function($scope,$routeParams, Pusher, parseQuery) {
  $scope.params = $routeParams;
  
  var query = parseQuery.new("Proveedor");
  parseQuery(query).find().then(function(results){
    
  }),function(){
    alert(error);
  };
  
});
