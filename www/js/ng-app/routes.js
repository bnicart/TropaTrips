angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("places", {
        url: "/places",
        templateUrl: "templates/places.html",
        controller: "PlacesController"
      })
      .state("place", {
        url: "/places/:id",
        templateUrl: "templates/place.html",
        controller: "PlacesController"
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/places');
  });
