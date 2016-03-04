'use strict';

var config = require('../config'),
	gulp = require('gulp'),
	del = require('del');

gulp.task('clean:deps', 'Clean Node and JSPM folders.',
	del.bind(
		null, 
		[config.dependencyPaths.node, config.dependencyPaths.jspm]
	)
);