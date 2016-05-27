import {Component, OnInit} from '@angular/core';
import {Routes, Route, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from '../home/home.component';

@Component({
	selector: 'app',
	template: `
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})
@Routes([
	new Route({path: '/home', component: Home})
])
export class App implements OnInit {
  public message: number;

  constructor(private router: Router) {
    this.message = 'test';
  }
	
	ngOnInit() {
		this.router.navigate(['/home']);
	}
}
