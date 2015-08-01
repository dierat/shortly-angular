angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  $scope.data = [];

  $scope.goToLink = function(index){
    // sends the user to the actual site
    Links.getData('/api/links/' + $scope.data[index].code);
  };

  $scope.getLinks = function(){
    Links.getData('/api/links').then(function(data){
      $scope.data = data;
    }).catch(function(err){
      console.error(err);
    });
  };
  $scope.getLinks();
})
.factory('Links', function($http){

  var getData = function(url) {
    return $http({
      method: 'GET',
      url: url
    }).then(function(res){
      return res.data;
    });
  };

  return {
    getData: getData
  };
});
