'use strict';

const angular = require('angular');

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

angular.module('devPortfolio', []);

require('./component/app-nav');

require('./component/app-main');
require('./component/app-homepage');
require('./component/app-about');
require('./component/app-portfolio');
