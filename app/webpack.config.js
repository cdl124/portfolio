'use strict';

const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');
const ExtractText = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const apiUrl = process/env.API_URL || 'http://localhost:3000';
