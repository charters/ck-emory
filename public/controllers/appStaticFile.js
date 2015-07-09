var leaderboardApp = angular.module('leaderboardApp', []);

leaderboardApp.controller('leaderboardCtrl', function($scope, $http){
	
	$scope.initialize = function(){
		$http.get('/api/getAll')
		.then(function(res){
			$scope.leaders = res.data;
			var admin_total = 0;
			var yellow_total = 0;
			var green_total = 0;
			var blue_total = 0;
			var red_total = 0;
			var orange_total = 0;
			for (var i = 0; i < $scope.leaders.length; i++){
				if ($scope.leaders[i].unit == 'Admin'){
					admin_total += $scope.leaders[i].amount_raised;
				}
				else if ($scope.leaders[i].unit == 'Yellow'){
					yellow_total += $scope.leaders[i].amount_raised;
				}
				else if ($scope.leaders[i].unit == 'Green'){
					green_total += $scope.leaders[i].amount_raised;
				}
				else if ($scope.leaders[i].unit == 'Blue'){
					blue_total += $scope.leaders[i].amount_raised;
				}
				else if ($scope.leaders[i].unit == 'Red'){
					red_total += $scope.leaders[i].amount_raised;
				}
				else if ($scope.leaders[i].unit == 'Orange'){
					orange_total += $scope.leaders[i].amount_raised;
				}
			}
			$scope.admin_progress = (admin_total/5000 * 100) + '%';
			$scope.yellow_progress = (yellow_total/5000 * 100) + '%';
			$scope.green_progress = (green_total/5000 * 100) + '%';
			$scope.blue_progress = (blue_total/5000 * 100) + '%';
			$scope.red_progress = (red_total/5000 * 100) + '%';
			$scope.orange_progress = (orange_total/5000 * 100) + '%';

		})
	}
});