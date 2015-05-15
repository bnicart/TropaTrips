(function() {
  'use strict';

  var appservice = angular.module("appService", []);

  appservice.factory("dataContext", ['$http', function ($http) {
    alert("test");
    var service = {
      getPlaces: getPlaces
    }

    return service;

    function getPlaces(){
      return $http.get('/api/places.json');
    }
  }]);
})();