(function() {
  'use strict';

  var appservice = angular.module("appService", []);

  appservice.factory("dataContext", ['$http', function ($http) {
    var placeToView;
    var service = {
      getPlaces: getPlaces,
      viewPlace: viewPlace,
      getPlaceToView: getPlaceToView
    };

    return service;

    function getPlaces(){
      return $http.get('/api/places.json');
    }

    function viewPlace(place) {
      placeToView = place;
    }

    function getPlaceToView() {
      return placeToView;
    }
  }]);
})();

