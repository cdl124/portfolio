'use strict';

require('./_app-main.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appMain', function() {
  return {
    restrict: 'E',
    template: require('./app-main.html'),
    scope: {}
  };
});
