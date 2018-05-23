angular.module('app').controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance, userPersistenceService, modalInstance, data) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.data = {
        "title": '',
        "description": '',
        "status": '',
        "assigned_user": '',
        "due_date": '',
        "project": ''
    }

    var coo = userPersistenceService.getCookieData();
    if (coo) {
        $scope.phone_number = coo;
        console.log(coo);
    }

    $scope.onSubmit = function () {
        $scope.data.phone_number = $scope.phone_number;
        $http.post('/api/task/addTask', $scope.data).then(
            function successCallback(response) {
                if (response.data) {
                    var smsData = {
                        phoneNumber: '94778651240',
                        message: 'a task assigned to you'
                    }
                    $http.post('/api/users/sendSMS', smsData).then(
                        function successCallback(response) {
                            console.log(response)
                        },
                        function errorCallback(err) {
                            console.log(err)
                        }
                    )
                } else {
                    var smsData = {
                        phoneNumber: '94778651240',
                        message: 'download the todo app'
                    }
                    $http.post('/api/users/sendSMS', smsData).then(
                        function successCallback(response) {
                            console.log(response)
                        },
                        function errorCallback(err) {
                            console.log(err)
                        }
                    )
                }
            },
            function errorCallback(err) {
                console.log(err)
            }

        )
    }

});

