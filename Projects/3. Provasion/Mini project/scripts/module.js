var app = angular.module("patientInformation", []);

app.controller("myCtrl", function ($scope, $http) {
    $http.get("patient-data/patientdetails.json").then(function (data) {
        $scope.mydata = data.data
    });
    $scope.count = 0
    $scope.searchbar = ""
    $scope.submit = function () {
        if (confirm("Do you want to save changes?") == true) {
            $scope.usermsg = "Data saved successfully!";
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        } else {
            $scope.usermsg = "Save Canceled!";
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        }
    }
    $scope.selectPatient = function (index) {
        if ($scope.mydata && index != -1) {
            //broadcast seleted patient
            $scope.selectedPatient = $scope.mydata[index]
            $scope.selectedPatient.dob = new Date($scope.selectedPatient.dob)
            $scope.selectedPatient.sheduleDateTime = new Date($scope.selectedPatient.sheduleDateTime)
        }
    }
    //search function
    $scope.search = function () {
        let input = $scope.searchbar
        input = input.toLowerCase();
        let x = document.getElementsByClassName('list');

        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "list-item";
            }
        }
    }
});
