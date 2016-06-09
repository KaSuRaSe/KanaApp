import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';
import { name as Lernen } from '../lernen/lernen';
import { name as Testen } from '../testen/testen';
import { name as Login } from '../login/login';

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
	uiRouter,
	Lernen,
	Testen,
	Login
]).component(name, {
	template,
	controllerAs: name,
	controller: Home
})
	.config(config);

function config($stateProvider, $locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			template: '<home></home>'
		})
});
