angular.module('app').controller('upComingController', ['$scope', '$rootScope', 'userPersistenceService', '$uibModal', function ($scope, $rootScope, userPersistenceService, $modal) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
    $scope.tasks = [];
    $scope.result;
    $scope.openModal = function () {
        var x = $rootScope.openModal('');
    };

    var init = function () {
        $scope.component;
        $scope.component = $scope.comp;
        $scope.component.cookies = userPersistenceService;
        $rootScope.registerEventListeners($scope, $scope.component);
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component);
    };

    init();

    $scope.swipeRes = function(){
        console.log('Swipe Action')
    }
}]);