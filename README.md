# Angular 2 Seed Project
Starting point for a blank Angular 2 application

[![devDependency Status](https://david-dm.org/ChrisMurphy/ng2-seed/dev-status.svg)](https://david-dm.org/ChrisMurphy/ng2-seed#info=devDependencies)
[![Analytics](https://ga-beacon.appspot.com/UA-27347264-3/welcome-page)](https://github.com/igrigorik/ga-beacon)

## Usage

1. To install project global dependencies

		npm run setup
    
2. To install project dependencies

		npm run install
		
3. To develop with the uncompiled version of the code and view in browser with live reload

		npm run development
		
4. To develop with the compiled version of the code and view in browser with live reload

		npm run production
		
5. To build the production version only

		npm run build.prod

## Technology Stack

### Application
* angular 2.0.0 beta 8
* typescript

### Build and Dependecy Management
* systemjs
* jspm
* gulp + plugins
* live-server
		
## Info

Has integrated tasks if using Visual Studio Code

1. Press ctrl + shift + p

2. Type run and select "Task: Run Task"

3. Select from "build", "development", "production" or "setup" (relates to usage description above)