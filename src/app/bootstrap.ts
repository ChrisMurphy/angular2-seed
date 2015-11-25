/// <reference path="../typings/tsd.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { bootstrap, provide } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MyAppComponent } from 'app/components/my-app/my-app';

bootstrap(MyAppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
