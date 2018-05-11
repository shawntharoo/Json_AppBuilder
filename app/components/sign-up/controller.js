angular.module('app').controller('signUpController', ['$scope', '$rootScope','$http','userPersistenceService','$state', function ($scope, $rootScope,$http, userPersistenceService,$state) {
    $scope.components = $rootScope.registerUserComponents($scope.component.data);
    $scope.component.cookies = userPersistenceService;
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    var init = function () {
        // check userPersistenceService.getCookieData() isNotEmpty
        // if(userPersistenceService.getCookieData() ){

        // }
        var coo = userPersistenceService.getCookieData();
        if(coo){
            console.log("cookie data found");
            $state.go('mainView');
            console.log('mainView')
        }
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data);
    };
    $scope.onAppEnter = function(){
        $rootScope.$broadcast($scope.component.emits.onAppEnter,angular.copy($scope.component));
    }
    $scope.onSubmit = function(){
        $rootScope.$broadcast($scope.component.emits.onDetailsSubmit,angular.copy($scope.component));
    };
    $scope.onVerification = function(){
        $rootScope.$broadcast($scope.component.emits.onVerification,angular.copy($scope.component));
    }

    init();
}]);