'use strict';

angular.module('bookingApp').controller('MainCtrl', function($scope, $http, parseQuery, socket) {
  $scope.consumidores = [];
  var query = new Parse.Query("Consumidor");

  parseQuery.find(query).then(function(results) {
    $scope.consumidores = _.map(results, function(r) {
      return {
        nombre: r.attributes.nombre,
        id: r.id,
        selected: false
      };
    });
  }, function(error) {
    alert(JSON.stringify(error));
  });

  $scope.seleccionar = function(item) {
    _.each($scope.consumidores, function(c) {
      c.selected = false;
    });
    item.selected = true;
  };

  $scope.pedir = function(item) {
    socket.emit("pedir",{
      id:item.id,
      name:item.nombre
    });
  }
});