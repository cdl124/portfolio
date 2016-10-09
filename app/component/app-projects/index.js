'use strict';

require('./_app-projects.scss');

const angular = require('angular');
const $ = require('jquery');

angular.module('devPortfolio')
.directive('appProjects', function() {
  return {
    restrict: 'E',
    template: require('./app-projects.html'),
    scope: {}
  };
})
.controller(AppProjectsController, [AppProjectsController]);

function AppProjectsController() {
  this.showTheDeets = function() {
    $(function() {
      $(this).slider();
    });
  };
}
