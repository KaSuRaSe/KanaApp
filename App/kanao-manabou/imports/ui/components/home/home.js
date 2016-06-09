import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';
import { name as Lernen } from '../lernen/lernen';
import { name as Testen } from '../testen/testen';
import { name as Login } from '../login/login'

class Home {
	constructor($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);
	}
}

const name = 'home';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Home
})
	.config(config);

function config($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<lernen></lernen>'
		})
}

console.log(template);