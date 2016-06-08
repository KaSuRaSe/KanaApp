import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './login.html';

class Login {}

const name = 'login';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Login
})
	.config(config);

function config($stateProvider) {
	'ngInject';
	$stateProvider
		.state('login', {
			url: '/home/login',
			template: '<login></login>'
	});
}