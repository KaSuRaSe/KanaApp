import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './login.html';

class Login {
	constructor($stateParams, $scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);
	}
}

const name = 'login';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter,
	'accounts.ui'
]).component(name, {
	template,
	controllerAs: name,
	controller: Login
}).config(function ($stateProvider, $urlRouterProvider) {
		'ngInject';

		$stateProvider.state('home/login', {
			url: '/login',
			template: '<login></login>'
		})
	
});