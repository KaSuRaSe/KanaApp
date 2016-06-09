import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './kanaoManabou.html';
import { name as Navigation } from '../navigation/navigation';
import { name as Home } from '../home/home';

class KanaoManabou {}

const name = 'kanao-manabou';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	Navigation,
	Home
]).component(name, {
	template,
	controllerAS: name,
	controller: KanaoManabou
})
	.config(config);

function config($locationProvider, $urlRouterProvider) {
	'ngInject';

	//$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/home');
}