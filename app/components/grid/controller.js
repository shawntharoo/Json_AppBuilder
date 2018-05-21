angular.module('app').controller('gridViewController', ['$scope', '$rootScope', '$http','userPersistenceService','$state','$stateParams',  function ($scope, $rootScope, $http,userPersistenceService,$state,$stateParams) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
    var init = function(){
        var cookie = userPersistenceService.getCookieData();
        if(!cookie){ 
            $state.go($scope.component.data.initialState);
        }
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data.components);
    }
    init();
}]);