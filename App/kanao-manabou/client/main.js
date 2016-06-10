import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { name as KanaoManabou } from '/imports/ui/components/kanaoManabou/kanaoManabou';

function onReady() {
	angular.bootstrap(document, [
		KanaoManabou
    ], {
		strictDi: true
	});
}
 
if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}