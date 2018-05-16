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
        
        $rootScope.$broadcast($scope.component.emits.initialDataLoad, $scope.component);
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data.tabs);
<<<<<<< HEAD
=======
        $scope.comp = $scope.components[0];
        $scope.template = $scope.components[0].templateUrl;
        $scope.tabTitleSelected = $scope.components[0].title;
        $scope.name = $scope.components[0].name;
>>>>>>> 7a1f4558ce8b2a4d2fd715a221e4f95bb169e0af
    }
    init();

    $scope.tabSelect = function(component){
        $rootScope.$broadcast($scope.component.emits.onTabSelect, component);
    }
}]);