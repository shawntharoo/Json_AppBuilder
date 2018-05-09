var app = angular.module('app', ['gridster', 'ui.router']);

function Component(name) {
    this.name = name;
    this.templateUrl;
    this.inputs = [];
    this.data = {};
    this.styleNames = [];
    this.styles = {};
    this.emittingEventNames = [];
    this.emits = {};
    this.listenningEvents;
    this.col;
    this.row;
    this.sizeX;
    this.sizeY;
    this.ajax;
}

app.factory('componentFactory', [function () {
    var components = {};

    var registerComponent = function (component) {
        components[component.name] = component;
    };

    var getComponent = function (name) {
        return angular.copy(components[name]);
    };
    // var nav = new Component("Nav");
    // nav.templateUrl = 'components/nav/template.html';
    // nav.inputs = ['views'];
    // nav.styleNames = ['outerLayout', 'navUl', 'navLi', 'navWrapper'];
    // registerComponent(nav);

    var signUp = new Component("SignUp");
    signUp.templateUrl = 'components/sign-up/template.html';
    signUp.inputs = ['appTitle', 'appTitleLogo', 'appTagLine', 'appButtonTitle', 'appTagLine2', 'appButton2Title'];
    signUp.styleNames = ['appTitleStyle', 'appTitleLogo1', 'appTitleLogo', 'appTagLine', 'appTitleButton', 'inputField', 'appTagLine2', 'appTitleButton2'];
    signUp.emits=['onDetailsSubmit']
    registerComponent(signUp);
    return {
        registerComponent: registerComponent,
        getComponent: getComponent
    }
}]);

app.controller('mainController', ['$scope', 'componentFactory', '$rootScope', '$http', function ($scope, componentFactory, $rootScope, $http) {

    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        mobileBreakPoint: 930,
        resizable: { enabled: false }, draggable: { enabled: false }
    };

    $scope.components = [];

    $rootScope.registerEventListeners = function (scope, grid) {
        var listeners = grid.listenningEvents;
        for (var l in listeners) {
            scope.$on(listeners[l].name, listeners[l].execute);
        }
    };

    $rootScope.registerUserComponents = function (comps) {
        var compnts = [];
        for (var i = 0; i < comps.length; i++) {
            var comp = componentFactory.getComponent(comps[i].name);
            comp.col = comps[i].col;
            comp.row = comps[i].row;
            comp.sizeX = comps[i].sizeX;
            comp.sizeY = comps[i].sizeY;
            comp.ajax = $http;

            // set styles
            for (var s = 0; s < comp.styleNames.length; s++) {
                var styleF = comps[i].styles[comp.styleNames[s]];
                if (typeof styleF === 'function') {
                    comp.styles[comp.styleNames[s]] = styleF($scope, comp);
                }
            }

            // set inputs
            for (var j = 0; j < comp.inputs.length; j++) {
                var dataF = comps[i].data[comp.inputs[j]];
                if (typeof dataF === 'function') {
                    comp.data[comp.inputs[j]] = dataF($scope, comp);
                }
            }

            // emitting events
            comp.emits = comps[i].emits;
            comp.listenningEvents = comps[i].listens;
            compnts.push(comp);
        }
        return compnts;
    };

    var init = function () {
        $scope.components = $rootScope.registerUserComponents(components);
    };

    init();
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
    for (var c = 0; c < components.length; c++) {
        if (components[c].name == 'Nav') {
            var views = components[c].data.views();
            for (var v = 0; v < views.length; v++) {
                $stateProvider.state({
                    name: views[v].name,
                    url: views[v].url,
                    controller: 'navController',
                    templateUrl: 'components/nav/view-template.html',
                    viewIndex: v
                });
            }
            if (views.length > 0) {
                $urlRouterProvider.otherwise(views[0].url);
            }
        }
    }
});