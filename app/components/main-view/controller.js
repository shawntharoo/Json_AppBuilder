angular.module('app').controller('mainViewController', ['$scope', '$rootScope', '$http',  function ($scope, $rootScope, $http) {
    $scope.components = $rootScope.registerUserComponents($scope.component.data);
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
    var init = function(){
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data);
    }
    init();
}]);