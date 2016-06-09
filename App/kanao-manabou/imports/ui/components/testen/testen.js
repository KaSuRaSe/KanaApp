import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './testen.html';

class Testen {
	constructor($stateParams, $scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);
	}
}

const name = 'testen';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Testen
}).config(function ($stateProvider, $urlRouterProvider) {
		'ngInject';

		$stateProvider.state('home/testen', {
			url: '/testen',
			template: '<testen></testen>'
		})
	
});