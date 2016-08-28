'use strict';

const angular = require('angular');
const ngRoute = require('angular-routes');

angular.module('devPortfolio', [ngRoute]);

require('!!file?[name].[ext]!./html/index.html');
require('./scss/base.scss');

require('./component/app-main');
require('./component/app-menu');
