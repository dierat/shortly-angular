angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
})
.factory('Links', function(){

  var linksArray = [
    {
      title: "Hack Reactor",
      url: "www.hackreactor.com",
      'base-url': "http://localhost/",
      code: "nfoqwhp9p4t8qp",
      visits: 4
    },
    {
      title: "Stack Overflow",
      url: "www.stackoverflow.com",
      'base-url': "http://localhost/",
      code: "abcdefg123",
      visits: 5
    }
  ];

  var getLinks = function(){};

  var goToLink = function(){};

  return {
    linksArray: linksArray,
    getLinks: getLinks,
    goToLink: goToLink
  };
});
