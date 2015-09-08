var app = angular.module('app', []);
app.controller('searchFriendCtrl', function($scope, $http) {
    $http.get('friend-data.json').success(function(data){
        $scope.friends = data;
    });
    
});