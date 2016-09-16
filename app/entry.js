'use strict';

const angular = require('angular');

require('!!file?[name].[ext]!./html/index.html');
require('./scss/base.scss');

angular.module('devPortfolio', []);

require('./component/app-nav');

require('./view/about');
require('./view/home');
require('./view/portfolio');
