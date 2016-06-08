import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './kanaoManabou.html';
import { name as Navigation } from '../navigation/navigation';

class KanaoManabou {}

const name = 'kanaoManabou';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	Navigation
]).component(name, {
	template,
	controllerAS: name,
	controller: KanaoManabou
})
	.config(config);

function config($locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/home');
}