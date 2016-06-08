import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './mainbody.html';


class MainBodyCtrl {
  constructor() {
    this.buttons = [{
      text: 'Lernen'
    }, {
      text: 'Testen'
    }, {
      text: 'Einstellungen'
    }];
  }
}
 
export default angular.module('mainbody', [
  angularMeteor
])
  .component('mainbody', {
    templateUrl: 'imports/ui/mainbody.html',
    controller: MainBodyCtrl
  });