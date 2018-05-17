angular.module('app').controller('upComingController', ['$scope', '$rootScope', 'userPersistenceService','$uibModal',function ($scope, $rootScope, userPersistenceService, $modal) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
    $scope.tasks = [];
    var init = function () {

        // var date1 = new Date("Fri May 12 2018 00:00:00 GMT+0530 (IST)");
        // var middle = new Date("Fri May 13 2018 13:00:00 GMT+0530 (IST)");
        // var date2 = new Date("Fri May 13 2018 00:00:00 GMT+0530 (IST)");
        // var d1 = date1.toISOString();
        // var mi = middle.toISOString();
        // var d2 = date2.toISOString();

        // var open_time = Date.parse(d1);
        // var close_time = Date.parse(d2);
        // var check_val = Date.parse(mi);

        // if (check_val > open_time && check_val < close_time) {
        //     var flag = 1;
        // } else {
        //     var flag = 2
        // }


            $scope.openModal = function() {
                var modalInstance = $modal.open({
                    templateUrl: 'components/modal/template.html',
                    controller: 'ModalInstanceCtrl',

                    resolve: {
                        data: function() {
                            return '';
                        }
                    }
                });
                
                modalInstance.result.then(function (returnData) {
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };

            

        $scope.component = $scope.comp;
        $scope.component.cookies = userPersistenceService;
        $rootScope.registerEventListeners($scope, $scope.component);
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component);
    };

    init();
}]);