var appController = angular
  .module("appController", ['appService']);


appController.controller("PlacesController", ['$scope', 'dataContext', function($scope, dataContext){
  dataContext.getPlaces().then(function(data){
    $scope.data = data.data;
  });

  $scope.placeToView = dataContext.getPlaceToView();
  
  $scope.viewPlace = function(place) {
    dataContext.viewPlace(place);
  };
}]);
