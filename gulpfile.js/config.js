var path = require('path');

module.exports = new function() {
  this.extensions = {
    javascript: '.js'
  };

  this.folders = {
    dist: 'dist',
    dev: 'dev',    
    src: 'src'
  };

  this.dependencyPaths = {
    node: 'node_modules',
    jspm: path.join(this.folders.src, 'jspm_packages'),
    typings: path.join(this.folders.src, 'typings'),
  };

  this.globs = {
    all: '**/*',
    typescript: '**/*.ts',
    typescriptDefinitions: '**/*.d.ts',
    specsE2e: path.join(this.folders.src, 'app/**/*.e2e.ts')
  };

  this.typescript = {
    allSourceFiles: path.join(this.folders.src, this.globs.typescript)
  }
  
  this.files = {
    htmlEntry: path.join(this.folders.src, 'index.html'),
    bootstrapModule: 'app/bootstrap',
    compiledModule: 'js/app.js',
    baseProtractor: 'protractor.conf.js'
  };

  this.server = {
    development: {
      port: 9000, // Set the server port. Defaults to 8080. 
      root: this.folders.src, // Set root directory that's being server. Defaults to cwd. 
      // mount: [['/node_modules', '../node_modules']] // Mount a directory to a route. 
      open: false 
    },
    production: {
      port: 9090, // Set the server port. Defaults to 8080. 
      root: this.folders.dist, // Set root directory that's being server. Defaults to cwd.  
      wait: 3000, // Waits for all changes, before reloading. Defaults to 0 sec.
      open: false 
    },
  };
};