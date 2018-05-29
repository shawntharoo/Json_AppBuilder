angular.module('app').controller('ModalInstanceCtrl',function ($rootScope, $scope, $http, $uibModalInstance, modalInstance, userPersistenceService, data, $parse,$state) {
    $scope.components = $rootScope.registerUserComponents(data.modal_components);
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        mobileBreakPoint: 930,
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    $scope.components.ok = function () {
        $uibModalInstance.close();
        $state.go('gridView');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});