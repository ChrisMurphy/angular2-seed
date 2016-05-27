SystemJS.config({
  paths: {
    "app/": ""
  },
  browserConfig: {
    "paths": {
      "github:": "/jspm_packages/github/",
      "npm:": "/jspm_packages/npm/"
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    "app": {
      "main": "bootstrap",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        },
        "*.js": {
          "loader": "ts"
        }
      }
    }
  },
  map: {
    "@angular/http": "npm:@angular/http@2.0.0-rc.1",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
    "@angular/router": "npm:@angular/router@2.0.0-rc.1",
    "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.1"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.1",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
    "@angular/core": "npm:@angular/core@2.0.0-rc.1",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
    "common": "npm:@angular/common@2.0.0-rc.1",
    "compiler": "npm:@angular/compiler@2.0.0-rc.1",
    "core": "npm:@angular/core@2.0.0-rc.1",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "http": "npm:@angular/http@2.0.0-rc.1",
    "platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
    "platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "router": "npm:@angular/router@2.0.0-rc.1",
    "router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.1",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {}
});
