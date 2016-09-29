'use strict';

require('./_app-about.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appAbout', function() {
  return {
    restrict: 'E',
    template: require('./app-about.html'),
    scope: {}
  };
});
