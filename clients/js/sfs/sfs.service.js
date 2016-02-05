angular.module('sfs.service',[])
.factory('sfsResource',function ($resource){
	return $resource('/api/:type');
});
