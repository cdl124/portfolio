'use strict';

require('./_app-homepage.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appHomepage', function() {
  return {
    restrict: 'E',
    template: require('./app-homepage.html'),
    scope: {}
  };
});
