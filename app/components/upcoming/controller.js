angular.module('app').controller('upComingController', ['$scope', '$rootScope', 'userPersistenceService', '$uibModal', function ($scope, $rootScope, userPersistenceService, $modal) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
    $scope.tasks = [];
    var init = function () {
        $scope.openModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'components/modal/template.html',
                controller: 'ModalInstanceCtrl',

                resolve: {
                    data: function () {
                        return '';
                    }
                }
            });

            modalInstance.result.then(function (returnData) {
            }, function () {
            });
        };



        $scope.component = $scope.comp;
        $scope.component.cookies = userPersistenceService;
        $rootScope.registerEventListeners($scope, $scope.component);
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component);
    };

    init();
    //$scope.components = $rootScope.registerUserComponents($scope.component.data.tabs);
    $scope.swipeRes = function(){
        console.log('Swipe Action')
    }
}]);