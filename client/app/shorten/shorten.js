angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Shorten) {
  angular.extend($scope, Shorten);

  $scope.shortenLink = function(){
    // grab the input text from form
    // send input to sever via post request
    $scope.sendData($scope.newLink).catch(function(err){
      console.error(err);
    });
  }
})
.factory('Shorten', function($http){
  var sendData = function(newLink){
    console.log("newLink = ", newLink);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: newLink}
    })
    .then(function(res){
      console.log("sucess??! res = ", res);
    });
  };

  return {
    sendData: sendData
  };
});
