'use strict';

require('./_app-nav.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appNav', function() {
  return {
    restrict: 'E',
    template: require('./app-nav.html'),
    scope: {}
  };
});
