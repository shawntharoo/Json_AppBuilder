angular.module('app').controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance, modalInstance, data) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
$scope.data = {
    "title" : '',
    "description" : '',
    "status":'',
    "assigned_user": '',
    "due_date":'',
    "project":''
}
    $scope.onSubmit = function () {
        $scope.data.phone_number = "94778651240";
        $http.post('/api/task/addTask', $scope.data).then(
            function successCallback(response) {
                console.log(response)
            },
            function errorCallback(response) {
                console.log(response)
            }

        )
    }

});

