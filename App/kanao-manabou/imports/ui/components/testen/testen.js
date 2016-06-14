import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './testen.html';


class Testen {
	constructor($stateParams, $scope, $reactive, $timeout) {
		'ngInject';


		//Werte vorbereiten
		$reactive(this).attach($scope);
		$scope.button={eins:'',zwei:'',drei:'',vier:''};
		$scope.count = Math.floor(Math.random()*4);
		$scope.hiragana=['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん'];
		$scope.romaji=['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n'];
		$scope.random=[0,0,0,0];
		$scope.count = Math.floor(Math.random()*4);

		$scope.random[0] = Math.floor(Math.random()*$scope.hiragana.length);
		$scope.button.eins=$scope.romaji[$scope.random[0]];
		do{
			$scope.random[1] = Math.floor(Math.random()*$scope.hiragana.length);
		}
		while($scope.random[0]===$scope.random[1]);
		$scope.button.zwei=$scope.romaji[$scope.random[1]];
		do{
			$scope.random[2] = Math.floor(Math.random()*$scope.hiragana.length);
		}
		while($scope.random[0]===$scope.random[2]||$scope.random[1]===$scope.random[2]);
		$scope.button.drei=$scope.romaji[$scope.random[2]];
		do{
			$scope.random[3] = Math.floor(Math.random()*$scope.hiragana.length);
		}
		while($scope.random[0]===$scope.random[3]||$scope.random[1]===$scope.random[3]||$scope.random[2]===$scope.random[3]);
		$scope.zeichen=$scope.hiragana[$scope.random[$scope.count]];
		$scope.button.vier=$scope.romaji[$scope.random[3]];
		


		$scope.kana = true;
	    $scope.maru = false;
	    $scope.batsu = false;



	    //Funktion zum Testen der Tasten
    	$scope.testFunc = function(x){
    		//Überprüft ob die richtige Taste gedrückt wurde
    		if(x===$scope.count){
    			//Anzeigen das man richtig liegt, Kana wird durch grünen Kreis ersetzt
    			$scope.maru = !$scope.maru;
    			$scope.kana = !$scope.kana;
    			//Erstellt eine neue Zufallsabfrage und wartet eine Sekunde bevor diese Angezeigt wird
    			$timeout(function () {
    			$scope.count = Math.floor(Math.random()*4);

 				//Vier unterschiedliche Zufallswerte werden generiert
				$scope.random[0] = Math.floor(Math.random()*$scope.hiragana.length);
				$scope.button.eins=$scope.romaji[$scope.random[0]];
				do{
					$scope.random[1] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[1]);
				$scope.button.zwei=$scope.romaji[$scope.random[1]];
				do{
					$scope.random[2] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[2]||$scope.random[1]===$scope.random[2]);
				$scope.button.drei=$scope.romaji[$scope.random[2]];
				do{
					$scope.random[3] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[3]||$scope.random[1]===$scope.random[3]||$scope.random[2]===$scope.random[3]);
				$scope.button.vier=$scope.romaji[$scope.random[3]];

				//Abfrage wird generiert
    			$scope.zeichen=$scope.hiragana[$scope.random[$scope.count]];

    			//Kreis wird durch neues Zeichen ersetzt
      			$scope.maru = !$scope.maru;
      			$scope.kana = !$scope.kana;
 				 }, 1000);
    		}
    		else{
    			//Anzeigen das man falsch liegt, Kana wird durch ein rotes Kreuz ersetzt
    			$scope.batsu =!$scope.batsu;
    			$scope.kana = !$scope.kana;
    			//Neue Zufallsabfrage wird erzeugt und 1 Sekunde gewartet bevor diese Angezeigt wird
    			$timeout(function () {
    			$scope.count = Math.floor(Math.random()*4);
    			//Vier unterschiedliche Zufallswerte wereden generiert
    			$scope.random[0] = Math.floor(Math.random()*$scope.hiragana.length);
				$scope.button.eins=$scope.romaji[$scope.random[0]];
				do{
					$scope.random[1] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[1]);
				$scope.button.zwei=$scope.romaji[$scope.random[1]];
				do{
					$scope.random[2] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[2]||$scope.random[1]===$scope.random[2]);
				$scope.button.drei=$scope.romaji[$scope.random[2]];
				do{
					$scope.random[3] = Math.floor(Math.random()*$scope.hiragana.length);
				}
				while($scope.random[0]===$scope.random[3]||$scope.random[1]===$scope.random[3]||$scope.random[2]===$scope.random[3]);
				$scope.button.vier=$scope.romaji[$scope.random[3]];

				//Neue Abfrage wird generiert
    			$scope.zeichen=$scope.hiragana[$scope.random[$scope.count]];

    			//Von Kreuz zu neuem Zeichen wird gewechselt
      			$scope.batsu = !$scope.batsu;
      			$scope.kana = !$scope.kana;
 				 }, 1000);
    		}
    	}
    	
	};
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
	
}).directive("w3TestDirective", function() {
   		 	return {
		        template : "I was made in a directive constructor!"
		    };
})