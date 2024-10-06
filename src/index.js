import angular from "angular";

angular.module("myApp", []).controller("controllermain", [
    "$scope",
    function ($scope) {
        $scope.isAboutInfoVisible = false;

        $scope.toggleAboutInfo = function () {
            $scope.isAboutInfoVisible = !$scope.isAboutInfoVisible;
        };
    },
]);
