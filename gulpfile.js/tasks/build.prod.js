'use strict';

var gulp = require('gulp'),
	gulpSequence = require('gulp-sequence');

gulp.task('build:prod', 'Build entire production version of the code.',
	gulpSequence(['clean:prod', 'tslint'], ['build:js:prod', 'build:html:prod'])
);