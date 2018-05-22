angular.module('app').controller('tabViewController', ['$scope', '$rootScope', '$http', 'userPersistenceService', '$state', function ($scope, $rootScope, $http, userPersistenceService, $state) {
    
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
        $scope.componentList = $rootScope.registerUserComponents($scope.component.data.tabs);
        $rootScope.registerEventListeners($scope, $scope.component);
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
    }
    init();

    $scope.tabSelect = function(component){
        $rootScope.$broadcast($scope.component.emits.onTabSelect, component);
    }
}]);