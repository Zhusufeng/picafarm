angular.module('picafarm').controller('mainCtrl', function($scope, $http) {

  // this.farmers = {};
  $scope.farmerArr = [];
  $scope.tester = '!!! test !!!';


  $scope.get = function() {
    $http.get("/search").then(function(response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function(response) {
      console.log(response);
    });
  };

  $scope.hideComponent = function() {
    var elements = document.getElementsByClassName('farms');
    // if (elements.classList.contains('show')) {
    //   elements.classList.remove('show');
    // }
    // elements.className += 'hide';
    console.log(elements);
   // elements.classList.toggle('hide');
  };

  $scope.showComponent = function() {
    var elements = document.getElementsByClassName('farms');
    // if (elements.classList.contains('hide')) {
    //   elements.classList.remove('hide');
    // }
    //elements.className += 'show';
    elements.classList.toggle('show');    
  };

  $scope.get();

  var _name = 'Brian';
  $scope.user = {
    name: function(newName) {
     // Note that newName can be undefined for two reasons:
     // 1. Because it is called as a getter and thus called with no arguments
     // 2. Because the property should actually be set to undefined. This happens e.g. if the
     //    input is invalid
     return arguments.length ? (_name = newName) : _name;
    }
  };

  $scope.grabFarmTitle = function(newName) {
    return _name = newName;
  };
});
