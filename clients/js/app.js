angular.module('app',['ngRoute','ngResource','sfs.controller','sfs.service','favorite.controller','show.service','show.controller','ngAnimate','firebase','ui.bootstrap'])
.filter('filterit',function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
})
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/sfs.html',
		controller:'SfsController'
		
	})
	.when('/favorite',{
		templateUrl:'views/favorite.html',
		controller:'FavoriteController'
	})
	.when('/schedules',{
		templateUrl:'views/favorite.html',
		controller:'FavoriteController'
	})	
	.when('/show/:id',{
		templateUrl:'views/show.html',
		controller:'ShowController',
		resolve:{
			show: function($route,showResource){
                           return showResource.get({type:'shows',id:$route.current.params.id})
                        }
		}
	})
	.otherwise({
		redirectTo:'/'
	});

	$locationProvider.html5Mode(true);
}]);
