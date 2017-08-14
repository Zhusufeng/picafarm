angular.module('picafarm').controller('mainCtrl', function($scope, $http) {

  // this.farmers = {};
  this.farmerArr = [];
  
  this.get = function() {
    $http.get("/search").then(function(response) {
      console.log(response.data);
      // this.farmerArr.push(response.data);
    }).catch(function(response) {
      console.log(response);
    });
  };

  this.get();
});
