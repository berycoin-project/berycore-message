'use strict';

var gulp = require('gulp');
var berycoreTasks = require('berycore-build');

berycoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
