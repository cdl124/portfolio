'use strict';

require('./_app-main.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appMain', function() {
  return {
    restrict: 'E',
    template: require('./app-main.html'),
    controller: 'AppMainController',
    controllerAs: 'appMainCtrl',
    bindToController: true,
    scope: {}
  };
})
.controller('AppMainController', [AppMainController]);

function AppMainController() {

  this.selectedPage = 'home';
  this.selectPage = function(page) {
    if (page === 'home' || page === 'portfolio' || page === 'about') {
      this.selectedPage = page;
      console.log('page selected:', page);
      return this.selectedPage;
    }
  };
}
