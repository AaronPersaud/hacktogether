var hackTogether = angular.module('hackTogether',['ngMaterial']);

var x = null
console.log("x1: " + x)

setTimeout(function() {console.log("x2: " + x)}, 1000);

hackTogether.controller('profileCtrl', ['$scope', function($scope) {
  $scope.name = null;
  $scope.email = null;
  $scope.github = null;
  $scope.linkedin = null;
  $scope.skills = null;

 			$.ajax({
               type: "GET",
               url: 'http://hackthesix.mnachiappan.com/api/users',
               contentType: 'application/json;charset=UTF-8',
               data: {
                   objectId: "57b8e697fe2cd54e5a0d8e14", 
               },
               dataType: 'jsonp',
               success: function(data){
                   console.log(data);
                   x = data;
                   $scope.name = data.first_name + " " + data.last_name
                   $scope.email = data.email
                   $scope.github = data.github_link
                   $scope.linkedin = data.linked_url
                   $scope.skills = data.skills
                   console.log($scope.name)
                   console.log("success");
                   $scope.$apply()
               },
               error: function(jqXHR, textStatus, errorThrown ){
                   console.log(jqXHR);
                   console.log(textStatus);
                   console.log(errorThrown);
               }
           });

}]);

hackTogether.controller('membersCtrl', ['$scope', function($scope) {
	console.log("TEST")
	 $scope.solos = [

	 	{name:"Abeenesh U",skill:"Front-End Developer",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/nesh.jpg"},
	 	{name:"Aaron",skill:"Full-Stack",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/aesh.jpg"},
	 	{name:"Vinoth",skill:"Full-Stack",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/vesh.jpg"},
	 	{name:"Meyyappan",skill:"Full-Stack",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/mesh.jpg"},
	 	{name:"Abeenesh U",skill:"Front-End Developer",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/nesh.jpg"},
	 	{name:"Aaron",skill:"Full-Stack",description:"Html Css",status:"Looking for a Team",hackathons:"Going to Hack The Six",image:"../images/aesh.jpg"}

	 ]
}]);