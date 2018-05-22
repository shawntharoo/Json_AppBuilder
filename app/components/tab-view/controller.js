angular.module('app').controller('tabViewController', ['$scope', '$rootScope', '$http', 'userPersistenceService', '$state', function ($scope, $rootScope, $http, userPersistenceService, $state) {
    
    // $scope.gridOptions = {
    //     columns: 12,
    //     margins: [0, 0],
    //     resizable: { enabled: false }, draggable: { enabled: false }
    // };
    
    var init = function(){
        var cookie = userPersistenceService.getCookieData();
        if(!cookie){ 
            $state.go($scope.component.data.initialState);
        }
       //  $scope.components = [];
        $scope.tabs = $scope.component.data.tabs;
        $scope.selectedTab = $scope.component.data.selectedTab;
        $scope.tabSelect(  $scope.selectedTab);
        $rootScope.registerEventListeners($scope, $scope.component);
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
    };

    $scope.tabSelect = function(selectedTab){
        $scope.components = $rootScope.registerUserComponents(selectedTab.components);
        $scope.tabname = selectedTab.name;
    };

    init();
}]);