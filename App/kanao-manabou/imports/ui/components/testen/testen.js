import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './testen.html';

class Testen {
	constructor() {
		'ngInject';
	}
}

const name = 'testen';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Testen
})
	.config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider
		.state('testen', {
			url: '/home/testen',
			template: '<testen></testen>'
	});
}
