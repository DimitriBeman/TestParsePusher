'use strict';

angular.module('bookingApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'angularParse','doowb.angular-pusher'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});