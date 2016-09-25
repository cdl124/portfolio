'use strict';

require('./_app-portfolio.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appPortfolio', function() {
  return {
    restrict: 'E',
    template: require('./app-portfolio.html'),
    scope: {}
  };
});
