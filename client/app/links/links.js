angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  $scope.data = [];
  $scope.getLinks = function(){
    Links.getData().then(function(data){
      console.log("data = ", data);
      $scope.data = data;
    }).catch(function(err){
      console.error(err);
    });
  };
  $scope.getLinks();
})
.factory('Links', function($http){

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
    // sends the user to the actual site
  };

  return {
    goToLink: goToLink,
    getData: getData
  };
});
