angular.module('app').controller('upComingController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    var init = function () {
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component);
    };

    init();
}]);