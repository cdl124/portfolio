'use strict';

require('./_app-projects.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appProjects', function() {
  return {
    restrict: 'E',
    template: require('./app-projects.html'),
    scope: {}
  };
});
