#login.js here

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