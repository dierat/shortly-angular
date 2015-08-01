angular.module('shortly.links', [])

.controller('LinkController', function($scope, Links){
  angular.extend($scope, Links);

  $scope.getStuff = function(){
    Links.getData()
      .then(function(data){
        $scope.stuff = data;
        // can now access 'stuff' in the html after calling getDate(), I think
      })
      .catch(function(err){
        console.log(err);
      });
  };
})
.factory('Links', function($http){
  var links = [];
  var addLink = function(link){
    if (link){
      links.push(link);
      // this no longer updates the dom, does not seem to have access to the scope
      newLink = '';
    }
  };

  // I think this will return the links currently in the database
  var getData = function(){
    return $http({
      method: 'GET',
      url: '/'
    })
    .then(function(res){
      return res.data;
    });
  };

  return {
    links: links,
    addLink: addLink,
    getData: getData
  };
})