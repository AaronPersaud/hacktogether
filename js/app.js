var hackTogether = angular.module('hackTogether',[]);

hackTogether.controller('profileCtrl', ['$scope', function($scope) {
  $scope.name = 'Aaron Persaud';
  $scope.email = 'a4persau@uwaterloo.ca';
  $scope.github = 'https://github.com/AaronPersaud';
  $scope.linkedin = 'https://www.linkedin.com/in/aaronpersaud';
  $scope.skills = ["HTML","JavaScript","CSS"]
}]);