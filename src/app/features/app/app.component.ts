import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

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
