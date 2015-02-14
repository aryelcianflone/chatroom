// getParseData
// post data
angular.module('chatroom').controller('mainCtrl', function($scope, parseService, $interval) {
  
  $scope.getParseData = function() {
    parseService.getData().then(function(response) {
      $scope.messages = response.data.results;
    });
  };

  $scope.postData = function(message) {
    parseService.postData(message).then(function(response) {
        delete $scope.message;
    });
  };

  $scope.getParseData();

  $interval($scope.getParseData, 1500);

});