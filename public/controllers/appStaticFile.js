var leaderboardApp = angular.module('leaderboardApp', []);

angular.module('leaderboardApp',[]).filter('sameUnit', function(){
    
    return function(items, in_color){
        
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].color == in_color) {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
    };
});

leaderboardApp.controller('leaderboardCtrl', function($scope, $http){
	
	$scope.initialize = function(){
		$http.get('/api/getAll')
		.then(function(res){
			$scope.leaders = res.data;
			var total = 0;
			for (var i = 0; i < $scope.leaders.length; i++){
				total += $scope.leaders[i].amount_raised;
			}
			$scope.progress = (total/7000 * 100) + '%';
		})
	}
});