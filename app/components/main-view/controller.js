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
            console.log('no cookie');
            $state.go('SignUp');
        }
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data.tabs);
        $scope.template = $scope.components[0].templateUrl;
        $scope.tabTitleSelected = $scope.components[0].title;
    }
    init();

    $scope.tabSelect = function(component){
        $scope.template= component.templateUrl;
        $scope.tabTitleSelected = component.title;
    }
}]);