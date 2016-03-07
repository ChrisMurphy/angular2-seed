'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    jspm = require('jspm'),
    path = require('path');

gulp.task('build:js:dev', 'Build development JavaScript (with sourcemaps).', function() {
  return jspm.bundleSFX(
    config.files.bootstrapModule,
    path.join(config.folders.dev, config.files.compiledModule),
    { sourceMaps: true, minify: true }
  );
});