'use strict';

angular.module('bookingApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'angularParse'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});