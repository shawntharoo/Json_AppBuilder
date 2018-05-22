angular.module('app').controller('viewHeaderController', ['$scope', '$rootScope', '$http', 'userPersistenceService', '$state', function ($scope, $rootScope, $http, userPersistenceService, $state) {

    // $scope.gridOptions = {
    //     columns: 12,
    //     margins: [0, 0],
    //     resizable: { enabled: false }, draggable: { enabled: false }
    // };
    $rootScope.registerEventListeners($scope, $scope.component);
    $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);

}]);