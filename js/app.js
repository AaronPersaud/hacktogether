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

 			// $.ajax({
    //            type: "GET",
    //            url: 'http://hackthesix.mnachiappan.com/api/users',
    //            contentType: 'application/json;charset=UTF-8',
    //            data: {
    //                objectId: "57b8e697fe2cd54e5a0d8e14", 
    //            },
    //            dataType: 'jsonp',
    //            success: function(data){
    //                console.log(data);
    //                x = data;
    //                $scope.name = data.first_name + " " + data.last_name
    //                $scope.email = data.email
    //                $scope.github = data.github_link
    //                $scope.linkedin = data.linked_url
    //                $scope.skills = data.skills
    //                console.log($scope.name)
    //                console.log("success");
    //                $scope.$apply()
    //            },
    //            error: function(jqXHR, textStatus, errorThrown ){
    //                console.log(jqXHR);
    //                console.log(textStatus);
    //                console.log(errorThrown);
    //            }
    //        });

}]);

hackTogether.controller('membersCtrl', ['$scope', function($scope) {
	console.log("TEST")
	 $scope.solos = [

	 	{linkedin:"abeenesh02",github:"abeenesh",skills:"HTML, CSS, Javascript",grad:"2016",email:"authayak@uwaterloo.ca",school:"University of Waterloo",name:"Abeenesh", age:"22",last:"Uthayan",skill:"Front-End Developer",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/nesh.jpg"},
	 	{linkedin:"aaronpersaud",github:"aaronpersaud",skills:"HTML, CSS, Javascript",grad:"2018",email:"a4persau@uwaterloo.ca",school:"University of Waterloo",name:"Aaron",  age:"21",last:"Persaud",skill:"Full-Stack",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/aesh.jpg"},
	 	{linkedin:"vmarutha",github:"vmarutha",skills:"HTML, CSS, Javascript",grad:"2018",email:"vmarutha@uwaterloo.ca",school:"University of Waterloo",name:"Vinoth",  age:"21",last:"Maruthalingam",skill:"Full-Stack",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/vesh.jpg"},
	 	{linkedin:"meyyappan",github:"nachiappan",skills:"HTML, CSS, Javascript",grad:"2018",email:"mnachiap@uwaterloo.ca",school:"University of Waterloo",name:"Meyyappan",  age:"21",last:"Nachiappan",skill:"Full-Stack",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/mesh.jpg"},
	 	{linkedin:"abeenesh02",github:"abeenesh",skills:"HTML, CSS, Javascript",grad:"2016",email:"authayak@uwaterloo.ca",school:"University of Waterloo",name:"Abeenesh",  age:"22",last:"Uthayan",skill:"Front-End Developer",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/nesh.jpg"},
	 	{linkedin:"aaronpersaud",github:"aaronpersaud",skills:"HTML, CSS, Javascript",grad:"2018",email:"a4persau@uwaterloo.ca",school:"University of Waterloo",name:"Aaron",  age:"21",last:"Persaud",skill:"Full-Stack",description:"Html Css",status:"Looking <br/> For a Team",hackathons:"Going to Hack The Six",image:"../images/aesh.jpg"}

	 ]

   $scope.teams = [{m1:"Jesse",m2:"James",m3:"Meowth",m4:"Giovanni",t:"To blast off at the speed of light",d:"Surrender now or prepare to fight!",name:"Team Rocket",skill:"Full-Stack Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team1.jpg"},
                    {m1:"Leonardo",m2:"Donatello",m3:"Michaelangelo",m4:"Raphael",t:"Eating pizza",d:"Cowabunga",name:"Team Splinter",skill:"Front-end Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team2.jpg"},
                    {m1:"Aaron",m2:"Abeenesh",m3:"Meyyappan",m4:"Vinoth",t:"coding",d:"coding",name:"Team Zap",skill:"Full-Stack Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team1.jpg"},
                    {m1:"Aaron",m2:"Abeenesh",m3:"Meyyappan",m4:"Vinoth",t:"coding",d:"coding",name:"Team Art",skill:"Front-end Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team2.jpg"},
                    {m1:"Aaron",m2:"Abeenesh",m3:"Meyyappan",m4:"Vinoth",t:"coding",d:"coding",name:"Team Lugia",skill:"Full-Stack Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team1.jpg"},
                    {m1:"Aaron",m2:"Abeenesh",m3:"Meyyappan",m4:"Vinoth",t:"coding",d:"coding",name:"Team Ruby",skill:"Full-Stack Team",description:"Html Css",status:"Looking for One Member",hackathons:"Going to Hack The Six",image:"../images/team2.jpg"},
                  ];
      $scope.name = null
      $scope.src = null
      $scope.pic = null


   $scope.groups = [
      {name:"Valor",type:"Education",time:"2 days ago"},
      {name:"Mystic",type:"Financial",time:"4 days ago"},
      {name:"Lugia", type:"Machine Learning",time:"7 days ago"},
      ]

  $scope.viewModal = function(x) {
    console.log("aksjfldkj");
    console.log(x)
    var team = $scope.teams[x];
    console.log(team)
    $scope.name = team.name;
    $scope.src = team.image;
    $scope.m1 = team.m1;
    $scope.m2 = team.m2;
    $scope.m3 = team.m3;
    $scope.m4 = team.m4;
    $scope.t = team.t;
    $scope.d =  team.d;
    // $scope.$apply();
    $('.groups').modal('show');
  }

  $scope.show_Profile = function(x) {
    var solo = $scope.solos[x];
     $scope.pic = solo.image;
     $scope.name = solo.name;
     $scope.last = solo.last;
     $scope.age = solo.age;
     $scope.school = solo.school;
     $scope.email = solo.email;
     $scope.grad = solo.grad;
     $scope.skills = solo.skills
     $scope.github = solo.github
     $scope.linkedin = solo.linkedin;
     $('.profile').modal('show');
  }

  $scope.show_User_Profile = function() {
    var solo = $scope.solos[x];
     // $scope.pic = solo.image;
     // $scope.name = solo.name;
     // $scope.last = solo.last;
     // $scope.age = solo.age;
     // $scope.school = solo.school;
     // $scope.email = solo.email;
     // $scope.grad = solo.grad;
     // $scope.skills = solo.skills
     // $scope.github = solo.github
     // $scope.linkedin = solo.linkedin;
     $('.userProfile').modal('show');
  }
}]);