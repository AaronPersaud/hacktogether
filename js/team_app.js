var hackTogether = angular.module('hackTogether',['ngMaterial']);

var x = null
console.log("x1: " + x)

setTimeout(function() {console.log("x2: " + x)}, 1000);

hackTogether.controller('profileCtrl', ['$scope', function($scope) {
  $scope.name = "Team team";
  $scope.email = "Attending Hack the 6ix";
  $scope.github = null;
  $scope.linkedin = null;
  $scope.team_members = ["Vinoth", "Aaron", "Abeenesh", "Meyyappan"];
}]);