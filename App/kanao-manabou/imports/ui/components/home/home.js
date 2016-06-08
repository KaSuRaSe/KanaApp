import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

class Home {
	constructor($scope, $reactive) {
		'ngInject';
	}
}

const name = 'home';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name
	controller: Home
})
	.config(config);

function config($stateProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<home></home>'
		})
}