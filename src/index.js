import angular from "angular";
//import angularAnimate from "angular-animate";

angular.module("myApp", []).controller("controllermain", [
    "$scope",
    function ($scope) {
        $scope.isAboutInfoVisible = false;

        $scope.toggleAboutInfo = function () {
            $scope.isAboutInfoVisible = !$scope.isAboutInfoVisible;
        };
        
        $scope.gotoGameSearch = () => {
            location.href = "searchagame.html";
        };
    },
]);
