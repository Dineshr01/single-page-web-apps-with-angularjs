(function () {
  "use strict";
  var x = "hello";
  angular
    .module("LunchChecker", [])

    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.foods = "";
    $scope.message = "";
    $scope.messageColor = "black";
    $scope.check = function () {
      if ($scope.foods.length === 0) {
        $scope.message = "Please enter data first";
        $scope.messageColor = "red";
        return;
      }
      let temp = $scope.foods.split(",");
      console.log(temp);
      if (temp.length > 3) {
        $scope.message = "Too much!";
        $scope.messageColor = "green";
      } else {
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
      }
    };
  }
})();

// $scope.check = function () {
//       if (!$scope.foods || $scope.foods.trim().length === 0) {
//         $scope.message = "Please enter data first";
//         return;
//       }
//       var temp = $scope.foods.split(",").map(function(item) {
//         return item.trim();
//       }).filter(function(item) {
//         return item.length > 0;
//       });
//       if (temp.length > 3) {
//         $scope.message = "Too much!";
//       } else {
//         $scope.message = "Enjoy!";
//       }
//     };
