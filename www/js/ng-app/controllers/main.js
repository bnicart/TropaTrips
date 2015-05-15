var appController = angular
  .module("appController", ['appService']);


appController.controller("indexController", ['$scope', 'dataContext', function($scope, dataContext){
  dataContext.getPlaces().then(function(data){
    $scope.data = data.data;
  });
  
}])