/// <reference path="../../../typings/tsd.d.ts" />

import { Component, View } from 'angular2/angular2';

@Component({
	selector: 'home'
})
@View({
	template: `
	<h1>{{ title }}</h1>
	<p>Starting point for learning  with a blank angular2 application</p>
	<h2>Usage</h2>
	<h3></h3>
	<ol>
		<li>Install project: <em>npm run setup</em></li>
		<li>To develop and view in browser with live reload: <em>npm run development</em></li>
		<li>To build test the production version in browser: <em>npm run production</em></li>
		<li>To build the production version only: <em>npm run build</em></li>
	</ol>
	<h2>Technology Stack</h2>
	<h3>Application</h3>
	<ul>
		<li>angular 2.0.0 alpha 46</li>
		<li>reflect-metadata</li>
		<li>es6-shim</li>
		<li>zone.js</li>
		<li>typescript</li>
	</ul>
	<h3>Build and Dependency Management</h3>
	<ul>
		<li>jspm</li>
		<li>gulp + plugins</li>
		<li>live-server</li>
	</ul>	
	<h2>Info</h2>
	<p>Has integrated tasks if using Visual Studio Code</p>
	<ol>
		<li>Press ctrl + shift + p</li>
		<li>Type run and select "Task: Run Task"</li>
		<li>Select from "build", "development", "production" or "setup"</li>
	</ol>
	<p>Has integrated tasks if using WebStorm</p>
	<ol>
		<li>Got to the "Run" menu</li>
		<li>Select from "build", "development", "production" or "setup" (relates to usage description above)</li>
	</ol>
	`
})
export class HomeComponent {
	private title: string;

	constructor() {
		this.title = 'Angular2 Seed Project';
	}
}
