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
        $scope.components = $rootScope.registerUserComponents($scope.component.data);
        $rootScope.registerEventListeners($scope, $scope.component);
        var state = $state.$current.self;
        $scope.components = $rootScope.registerUserComponents($scope.component.data.tabs[0].components);
        console.log('test');
    }
    init();
}]);