app.controller("navController", function($scope, $state, $stateParams, userService){
$scope.userService = userService

$scope.logOut = function () {
  userService.logOut();
}

  //dashboard 
  $scope.dashboardClick = function(){
    userService.dashBoard();
  }
})