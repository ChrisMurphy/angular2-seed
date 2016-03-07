'use strict';

var gulp = require('gulp'),
	gulpSequence = require('gulp-sequence');

gulp.task('build:dev', 'Build development version of the code.',
	gulpSequence(['clean:build:dev', 'tslint'], ['build:js:dev', 'build:html:dev'])
);