'use strict';

require('./_app-contact.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appContact', function() {
  return {
    restrict: 'E',
    template: require('./app-contact.html'),
    scope: {}
  };
});
