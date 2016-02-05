angular.module('sfs.controller',['ngCookies'])
.controller('SfsController',function($scope,sfsResource,$firebaseArray,$cookies){
		var ref=new Firebase('https://torrid-inferno-8802.firebaseio.com/mozilla');
		$scope.list=$firebaseArray(ref);
		$scope.arr=[];
		ref.on('child_added', function(dataSnapshot) {
  			$scope.arr.push(dataSnapshot.val());
});
	$scope.getShow=function(){
			
		
		sfsResource.query({

			type:'shows',
			showname:$scope.showname
		},function(response){
			var Ckie=$cookies.get('Browsers');

		 	if(Ckie==null){
		 		
		 		console.log("No cookie found and hence setting it");
		 		var Ckie=$cookies.put('Browsers',Math.random);
		 		
			}
			
			$scope.list.$add($scope.showname);
			$scope.showdtl= response;
			// list.child($scope.showdtl.shows.id).set($scope.showname);
			
		});
	};
}).directive('customDirective',function(){
	return{
		
		templateUrl:'views/customdirective.html',
		
	};
});