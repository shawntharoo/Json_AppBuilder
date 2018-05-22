angular.module('app').controller('navHolderController', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
    $rootScope.registerEventListeners($scope, $scope.component);
}]);


angular.module('app').controller('navController', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    var init = function () {
        $rootScope.registerEventListeners($scope, $scope.component);
        var state = $state.$current.self;
        $scope.components = $rootScope.registerUserComponents($scope.component.data.views[state.viewIndex].components);
    };

    init();
}]);