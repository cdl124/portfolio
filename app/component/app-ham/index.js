'use strict';

require('./_app-ham.scss');

const angular = require('angular');

angular.module('devPortfolio')
.component('appHam', {
  template: require('./app-ham.html'),
  controller: 'AppHamController',
  controllerAs: 'appHamCtrl',
  // scope: {
  //   selectPage: '&'
  // }
})
.controller('AppHamController', ['$log', AppHamController]);

function AppHamController($log){
  $log.debug('HamController invoked');
  this.showNav = false;
}
