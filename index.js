var app = angular.module('leetcode', ['ngMaterial'])
.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue')
		.accentPalette('red')
});

app.controller('AppCtrl', function($scope, $mdSidenav, $http, $rootScope){
	$rootScope.sets = [];
	$rootScope.problems = [];
	$rootScope.isHome = true;
	$http.get('approvedList.json').success(function(response){
		angular.forEach(response,function(value,key){
			if(value.length>0){
				var set = {
					belong:key,
					questions:value
				};
				this.push(set);
			}
		},$rootScope.sets);
	});
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.openSidenav = function(menuId) {
		$mdSidenav(menuId).open();
	};

	$scope.closeSidenav = function(menuId) {
		$mdSidenav(menuId).close();
	};
});

app.controller('SideNavCtrl', function($scope, $mdSidenav, $http, $rootScope){
	$scope.avatar = {
		name:"胖叔叔 Ziofat",
		url:"images/avatar.png"
	}
	$scope.showSet = function(set){
		$rootScope.isHome = false;
		$rootScope.currentSet = set;
		$rootScope.problems = [];
		$rootScope.problems = set.questions;
		$http.get(set.belong+"/problems.json").success(function(response){
			var index = [];
			var j = 0;
			for (var i = 0; i < $rootScope.problems.length; i++) {
				$rootScope.problems[i].desc = response[$rootScope.problems[i].id].desc;
				$rootScope.problems[i].input = response[$rootScope.problems[i].id].input;
				$rootScope.problems[i].output = response[$rootScope.problems[i].id].output;
				var source = response[$rootScope.problems[i].id].source;
				index[i] = i;
				$http.get(set.belong+"/"+source).success(function(responseSource){
					$rootScope.problems[index[j]].source = responseSource;
					j++;
				});
			};
		});
	}
});