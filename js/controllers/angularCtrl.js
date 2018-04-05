

angular.module("angularCtrlModule", [])

.controller("AngularCtrl", ["$scope","calculations", function($scope,calculations){
    $scope.name = "Chaitanyakumar";
    $scope.tutorialsObject = {};
    $scope.tutorialsObject.title = "Angular Framework";
    $scope.tutorialsObject.bindOutput = 2;
    $scope.addMe = function() {
        $scope.tutorialsObject.bindOutput = calculations.addMe($scope.tutorialsObject.bindOutput);
    }
}])

.factory("calculations", function() {
    var calculations = {};

    calculations.addMe = function(a) {
        return a*2;
    }

    return calculations;
})

.directive("chaituMessage", function(){
    return {
        restrict: "AE",
        template: "<h3>Hai there</h3>"
    }
});