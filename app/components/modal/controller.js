angular.module('app').controller('ModalInstanceCtrl',function ($rootScope, $scope, $http, $uibModalInstance, modalInstance, userPersistenceService, data, $parse) {
    $scope.components = $rootScope.registerUserComponents(data);
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        mobileBreakPoint: 930,
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});