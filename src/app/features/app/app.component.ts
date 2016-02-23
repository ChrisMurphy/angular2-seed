import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { Home } from '../home/home.component';

@Component({
	selector: 'app',
	template: `
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
	{ path: '/Home', component: Home, name: 'Home' }
])
export class App {
  public message: string;

  constructor() {
    this.message = 'test';
  }
}
