import { Component } from 'angular2/core';

@Component({
	selector: 'home',
	template: `
	<h1>{{ title }}</h1>
	`
})
export class Home {
	private title: string;

	constructor() {
		this.title = 'Angular 2 Seed Project';
	}
}
