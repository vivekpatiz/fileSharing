angular.module('patientInformation')
    .component('patientInformation', {
        templateUrl: '../app/patient-information/patient-information.template.html',
        controller: PatientInformationController
    });

function PatientInformationController($scope) {

    $scope.isAlertDisplay = false;

    $scope.savePatientInformation = function () {
        $scope.isAlertDisplay = true;
    }
	
	$scope.CloseSucess = function() {
		$scope.isAlertDisplay = false;
    };
}

