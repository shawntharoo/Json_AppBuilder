angular.module('app').controller('upComingController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };

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
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $scope.component = $scope.comp;
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component);
    };

    init();
}]);