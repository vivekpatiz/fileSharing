angular.module('patientInformationApp')
    .component('patientList', {
        templateUrl: '../app/patient-list/patient-list.template.html',
        controller: PatientListController,
    })

function PatientListController($http, $rootScope) {
    var self = this;

    self.selectPatient = function (index) {
        if (self.patientDetailsList && index != -1) {
            //broadcast seleted patient
            $rootScope.$broadcast('selectedPatient', self.patientDetailsList[index]); 
        }
    }

    $http.get('../patient-data/patientdetails.json').then(function (response) {
        self.patientDetailsList = response.data;
    })
}