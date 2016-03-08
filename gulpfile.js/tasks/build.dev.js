'use strict';

var gulp = require('gulp'),
	gulpSequence = require('gulp-sequence');

gulp.task('build:dev', 'Build development version of the code.',
	gulpSequence(['clean:build:dev', 'lint:ts'], ['build:js:dev', 'build:html:dev'])
);