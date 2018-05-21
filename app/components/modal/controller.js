angular.module('app').controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance, modalInstance, data) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

