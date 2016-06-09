import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './lernen.html';

class Lernen {
	constructor($stateParams, $scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);
	}
}

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
 
function config($stateProvider, $urlRouterProvider) {
	'ngInject';

	
}