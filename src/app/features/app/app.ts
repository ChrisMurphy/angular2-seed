import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { HomeComponent } from '../home/home';

@Component({
	selector: 'app',
	template: `
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
	{ path: '/Home', component: HomeComponent, name: 'Home' }
])
export class Application {
  public message: string;

  constructor() {
    this.message = 'test';
  }
}
