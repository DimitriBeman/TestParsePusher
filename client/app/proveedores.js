'use strict';

angular.module('bookingApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'angularParse','doowb.angular-pusher'])
.config(function($routeProvider, $locationProvider, PusherServiceProvider) {
  
  PusherServiceProvider
      .setToken('e6ce0ce34037b3106bc2')
      .setOptions({});
  
  $routeProvider.otherwise({
    redirectTo: '/proveedores'
  });
  $locationProvider.html5Mode(true);
});