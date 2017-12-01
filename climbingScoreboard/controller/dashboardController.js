app.controller("dashboardController", function ($scope, $state, $stateParams, userService) {




  $scope.loginIncorrect = true;

//login 
  $scope.login = function () {
    $scope.loginIncorrect = userService.loginVerify($scope.emailLogin, $scope.passwordLogin)
  }


  

})



