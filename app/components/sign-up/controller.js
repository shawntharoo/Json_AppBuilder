angular.module('app').controller('signUpController', ['$scope', '$rootScope','$http','userPersistenceService', function ($scope, $rootScope,$location,$http, userPersistenceService) {
    $scope.components = $rootScope.registerUserComponents($scope.component.data);
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    var init = function () {
        //check userPersistenceService.getCookieData() isNotEmpty
        // if(userPersistenceService.getCookieData() ){

        // }
        $rootScope.registerEventListeners($scope, $scope.component);
        $scope.components = $rootScope.registerUserComponents($scope.component.data);
    };
    $scope.onAppEnter = function(){
        $rootScope.$broadcast($scope.component.emits.onAppEnter,angular.copy($scope.component), $location);
    }
    $scope.onSubmit = function(){
        $rootScope.$broadcast($scope.component.emits.onDetailsSubmit,angular.copy($scope.component), $location);
    };
    $scope.onVerification = function(){
        $rootScope.$broadcast($scope.component.emits.onVerification,angular.copy($scope.component), $location);
    }

    init();
}]);