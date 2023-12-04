/// <reference path="angular.min.js" />

var app = angular.module("patientInformation", []);

app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "vivek";
});