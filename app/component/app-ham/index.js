'use strict';

require('./_app-ham.scss');

const angular = require('angular');

angular.module('devPortfolio')
.directive('appHam', function(){
  return {
    restrict: 'E',
    template: require('./app-ham.html'),
    controller: 'AppHamController',
    controllerAs: 'appHamCtrl',
    scope: {
      selectPage: '&'
    }
  };
})
.controller('AppHamController', ['$log', AppHamController]);

function AppHamController($log){
  $log.debug('HamController invoked');
  this.showNav = false;

  this.closeNav = function(){
    this.showNav = false;
  };
  
}
