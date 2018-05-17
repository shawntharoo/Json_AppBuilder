var app = angular.module('app', ['gridster', 'ui.router','ngCookies', 'ui.bootstrap']);

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
    this.state;
    this.title;
    this.icon;
}

app.factory('componentFactory', [function () {
    var components = {};

    var registerComponent = function (component) {
        components[component.name] = component;
    };

    var getComponent = function (name) {
        return angular.copy(components[name]);
    };
    var nav = new Component("Nav");
    nav.templateUrl = 'components/nav/template.html';
    nav.inputs = ['views'];
    nav.styleNames = ['outerLayout'];
    registerComponent(nav);

    

    var signUp = new Component("SignUp");
    signUp.templateUrl = 'components/sign-up/template.html';
    signUp.inputs = ['appTitle', 'appTitleLogo', 'appTagLine', 'appButtonTitle', 'appTagLine2', 'appButton2Title','errorMsg','xc','showVeriForm','appEntry','verifcationCode','verificationBtnTitle'];
    signUp.styleNames = ['appTitleStyle', 'appTitleLogo1', 'appTitleLogo', 'appTagLine', 'appTitleButton', 'inputField', 'appTagLine2', 'appTitleButton2','inputFieldCC','inputFieldMN','wrapperMobile','errorMsg'];
    signUp.emits=['onAppEnter','onDetailsSubmit']
    registerComponent(signUp);

    var mainView = new Component("mainView");
    mainView.templateUrl = 'components/main-view/template.html';
    mainView.inputs = ['tabs','appTitle','appTitle2'];
    mainView.styleNames = ['tabTitle','appTitle','appTitle2','tabTitleSelected','tabListUl','tabListLi','tabHeaderWrap','mainOuterLayout'];
    registerComponent(mainView); 
    
    var upComing = new Component('upComing');
    upComing.templateUrl='components/upcoming/template.html';
    upComing.inputs =[];
    upComing.styleNames = ['tabItemouterLayer','dateHeadToday','dateWrapper','dateHeadDate','upcomingItem','itemTime','itemLeft','itemRight','itemProject','addTaskButton','addTaskButtonWrap'];
    registerComponent(upComing);

    var projectsList = new Component('projectsList');
    projectsList.templateUrl='components/projectsList/template.html';
    projectsList.inputs = [];
    projectsList.styleNames = ['tabItemouterLayer'];
    registerComponent(projectsList);

    var allTasks = new Component('allTasks');
    allTasks.templateUrl='components/alltasks/template.html';
    allTasks.inputs = [];
    allTasks.styleNames=['tabItemouterLayer'];
    registerComponent(allTasks);

    // var modal = new Component("modal");
    // modal.templateUrl = 'components/modal/template.html';
    // modal.inputs = [];
    // modal.styleNames = [];
    // registerComponent(modal); 
    
    return {
        registerComponent: registerComponent,
        getComponent: getComponent
    }
}]);

app.factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var mobileNumber = undefined;

		return {
			setCookieData: function(mobile) {
				$cookies.put("mobileNumber", mobile);
			},
			getCookieData: function() {
				mobile = $cookies.get("mobileNumber");
				return mobile;
			},
			clearCookieData: function() {
				mobileNumber = undefined;
				$cookies.remove("mobileNumber");
			}
		}
	}
]);

app.controller('mainController', ['$scope', 'componentFactory', '$rootScope', '$http','$state', function ($scope, componentFactory, $rootScope, $http,$state) {

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
            comp.state = $state;
            comp.title = comps[i].title;
            comp.icon = comps[i].icon;


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