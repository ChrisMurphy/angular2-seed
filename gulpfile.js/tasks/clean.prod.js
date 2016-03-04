'use strict';

var config = require('../config'),
	gulp = require('gulp'),
	del = require('del');

gulp.task('clean:prod', 'Clean production build files.',
	del.bind(
		null, 
		[config.folders.dist], 
		{ dot: true }
	)
);