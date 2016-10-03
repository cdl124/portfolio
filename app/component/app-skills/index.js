'use strict';

require('./_app-skills.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appSkills', function() {
  return {
    restrict: 'E',
    template: require('./app-skills.html'),
    scope: {}
  };
});
