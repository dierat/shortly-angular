angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  $scope.getLinks = function(){
  // console.log('Get links button clicked');
    Links.getData().then(function(data){
      $scope.data = data;
    }).catch(function(err){
      console.error(err);
    });
  };
  $scope.getLinks();
})
.factory('Links', function($http){

  // var linksArray = [
  //   {
  //     title: "Hack Reactor",
  //     url: "www.hackreactor.com",
  //     'base-url': "http://localhost/",
  //     code: "nfoqwhp9p4t8qp",
  //     visits: 4
  //   },
  //   {
  //     title: "Stack Overflow",
  //     url: "www.stackoverflow.com",
  //     'base-url': "http://localhost/",
  //     code: "abcdefg123",
  //     visits: 5
  //   }
  // ];

  var getData = function() {
    return $http({
      method: 'GET',
      url: '/api/links'
    }).then(function(res){
      console.log('res is', res, 'res.data is', res.data);
      return res.data;
    });
  };

  var goToLink = function(){
    // console.log('A link was clicked');
  };

  return {
    goToLink: goToLink,
    getData: getData
  };
});
