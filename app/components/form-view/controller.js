angular.module('app').controller('FormViewCtrl', function ($rootScope, $scope, userPersistenceService) {

    var coo = userPersistenceService.getCookieData();
    if (coo) {
        $scope.phone_number = coo;
    }
    $rootScope.registerEventListeners($scope, $scope.component);
    $scope.onSubmit = function (event) {
        console.log(this);
        $scope.component.formData = {
            "data": $scope.component.data.fieldNames,
            "mobilePhone": $scope.phone_number
        }
        $rootScope.$broadcast($scope.component.emits.formSubmit, angular.copy($scope.component));
    }

});