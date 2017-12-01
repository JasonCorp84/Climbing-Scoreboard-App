app.controller("userController", function ($scope, $state, $stateParams, userService) {
  // lists users in world ranking
  $scope.users = userService.getUsers();
  // $scope.routes = userService.currentUserRoutes();

  //gets individual users
  if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
    $scope.user = userService.getUserById($stateParams.id)
  } else {
    $scope.user = userService.getUserById($stateParams.id)
  }

  //displays user routes
  if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
    $scope.routes = userService.getUserRoutes($stateParams.id)
  } else {
    $scope.routes = userService.getUserRoutes($stateParams.id)
  }




  $scope.firstNameRequired = true;
  $scope.lastNameRequired = true;
  $scope.DOBRequired = true;
  $scope.emailRequired = true;
  $scope.passwordRequired = true;
  $scope.locationRequired = true;
  $scope.yearRequired = true;
  $scope.bioRequired = true;

  $scope.newUserSubmit = function () {
    if (($scope.firstName == "" || $scope.firstName == null)
      || ($scope.lastName == "" || $scope.lastName == null)
      || ($scope.age == "" || $scope.age == null)
      || ($scope.email == "" || $scope.email == null)
      || ($scope.password == "" || $scope.password == null)
      || ($scope.location == "" || $scope.location == null)
      || ($scope.year == "" || $scope.year == null)
      || ($scope.bio == "" || $scope.bio == null))
      {
        if ($scope.firstName == "" || $scope.firstName == null) {
          $scope.firstNameRequired = false;
        } else { $scope.firstNameRequired = true; }
        if ($scope.lastName == "" || $scope.lastName == null) {
          $scope.lastNameRequired = false;
        } else { $scope.lastNameRequired = true; }
        if ($scope.age == "" || $scope.age == null) {
          $scope.DOBRequired = false;
        } else { $scope.DOBRequired = true; }
        if ($scope.email == "" || $scope.email == null) {
          $scope.emailRequired = false;
        } else { $scope.emailRequired = true; }
        if ($scope.password == "" || $scope.password == null) {
          $scope.passwordRequired = false;
        } else { $scope.passwordRequired = true; }
        if ($scope.location == "" || $scope.location == null) {
          $scope.locationRequired = false;
        } else { $scope.locationRequired = true; }
        if ($scope.year == "" || $scope.year == null) {
          $scope.yearRequired = false;
        } else { $scope.yearRequired = true; }
        if ($scope.bio == "" || $scope.bio == null) {
          $scope.bioRequired = false;
        } else { $scope.bioRequired = true; }
    }
      else {
        userService.newUserForm($scope.firstName, $scope.lastName, $scope.age, $scope.email, $scope.password, $scope.location, $scope.year, $scope.bio)
        $state.go('app.userCard', {id: userService.getNewId()})
      }
    }
  
  // end user form------->



  // edit user button
  $scope.editUserButton = function () {
    $state.go("app.editUser", { id: $stateParams.id });
  }




  $scope.updateSubmitUser = function (){
    userService.spliceUpdate($stateParams.id, $scope.user.firstName, $scope.user.lastName, $scope.user.age, $scope.user.email, $scope.user.password, $scope.user.location, $scope.user.yearsClimbing, $scope.user.bio, $scope.user.routes, $scope.user.points)
    $state.go("app.userCard", {id: $stateParams.id});
  }


  //adds routes
$scope.addRoute = function(){
  userService.addsRoute($scope.route.name, $scope.route.location, $scope.route.grade)
}



// goes to add route form
$scope.addRouteForm = function(){
  userService.currentRouteNull()
$state.go("app.routeForm")
}


// editRoutesbutton
$scope.editRouteButton = function(routeName){
  userService.setRouteEdit(routeName)  
  $state.go("app.routeForm") 

}
  
  $scope.route = userService.getRoutesEdit();


  $scope.updateRoute = function(grade){
    userService.changePoints(grade)
    $state.go("app.dashboard", { id: userService.getNewId() })
  }

  //delete
$scope.deleteRouteButton = function(route){
userService.deleteRoute(route)
}

$scope.confirmDelete = function(){
$state.go("app.dashboard", { id: userService.getNewId() })
}
})



