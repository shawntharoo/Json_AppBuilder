angular.module('app').controller('tabViewController', ['$scope', '$rootScope', '$http', 'userPersistenceService', '$state', function ($scope, $rootScope, $http, userPersistenceService, $state) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
}]);