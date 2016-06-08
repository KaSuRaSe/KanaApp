import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/ui/mainbody';

angular.module('kana-o-manaboo', [
  angularMeteor,
  mainbody.name
]);

function onReady() {
  angular.bootstrap(document, ['simple-todos']);
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}