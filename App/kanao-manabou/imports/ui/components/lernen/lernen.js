import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './lernen.html';

class Lernen {}

const name = 'lernen';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Lernen
})
	.config(config);
 
function config($stateProvider) {
	'ngInject';

	$stateProvider.state('lernen', {
		url: '/home/lernen',
		template: '<lernen></lernen>'
	});
}