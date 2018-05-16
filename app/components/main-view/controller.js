angular.module('app').controller('mainViewController', ['$scope', '$rootScope', '$http','userPersistenceService','$state','$stateParams',  function ($scope, $rootScope, $http,userPersistenceService,$state,$stateParams) {
    //$scope.components = $rootScope.registerUserComponents($scope.component.data);
    $rootScope.registerEventListeners($scope, $scope.component);
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
        $scope.components = $rootScope.registerUserComponents($scope.component.data.tabs);
    }
    init();

    $scope.tabSelect = function(component){
        $rootScope.$broadcast($scope.component.emits.onTabSelect, component);
    }
}]);