var app = angular.module('app', ['gridster', 'ui.router', 'ngCookies', 'ui.bootstrap', 'ngTouch', 'ADM-dateTimePicker']);

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
    nav.templateUrl = 'components/navigation/template.html';
    nav.inputs = ['views'];
    nav.styleNames = ['outerLayout'];
    registerComponent(nav);

    var signUp = new Component("SignUp");
    signUp.templateUrl = 'components/sign-up/template.html';
    signUp.inputs = ['appTitle', 'appTitleLogo', 'appTagLine', 'appButtonTitle', 'appTagLine2', 'appButton2Title', 'errorMsg', 'xc', 'showVeriForm', 'appEntry', 'verifcationCode', 'verificationBtnTitle','countryCode'];
    signUp.styleNames = ['appTitleStyle', 'appTitleLogo1', 'appTitleLogo', 'appTagLine', 'appTitleButton', 'inputField', 'appTagLine2', 'appTitleButton2', 'inputFieldCC', 'inputFieldMN', 'wrapperMobile', 'errorMsg'];
    signUp.emits = ['onAppEnter', 'onDetailsSubmit']
    registerComponent(signUp);

    var appheader = new Component('appheader');
    appheader.templateUrl = 'components/app-header/template.html';
    appheader.inputs = ['appTitle', 'appTitle2'];
    appheader.styleNames = ['appTitle', 'appTitle2','tabHeaderWrap'];
    registerComponent(appheader);

    var viewheader = new Component('viewheader');
    viewheader.templateUrl = 'components/view-header/template.html';
    viewheader.inputs = ['title', 'value', 'buttonName', 'fieldNames', 'modalTitle', 'modal_components', 'modal_title'];
    viewheader.styleNames = ['dateHeadToday', 'dateWrapper', 'dateHeadDate','addTaskBtn','tabItemouterLayer','modal_inputFields','modal_button'];
    registerComponent(viewheader);

    var tabView = new Component('tabView');
    tabView.templateUrl = 'components/tab-view/template.html';
    tabView.inputs = ['tabs','selectedTab'];
    tabView.styleNames = ['tabTitle', 'tabTitleSelected', 'tabListUl', 'tabListLi', 'tabHeaderWrap', 'mainOuterLayout'];
    registerComponent(tabView);

    var list = new Component('list');
    list.templateUrl = 'components/list-view/template.html';
    list.inputs = [];
    list.styleNames = [ 'upcomingItem', 'itemTime', 'itemLeft', 'itemRight', 'itemProject', 'itemStatus','tabItemouterLayer'];
    registerComponent(list);

    var modal = new Component("modalpopup");
    modal.templateUrl = 'components/modal/template.html';
    modal.inputs = ['ok'];
    modal.styleNames = [];
    registerComponent(modal);

    var form = new Component("formView");
    form.templateUrl = 'components/form-view/template.html';
    form.inputs = ['title', 'fields','buttonName'];
    form.styleNames = ['inputFields', 'button','optionFields'];
    registerComponent(form);

    return {
        registerComponent: registerComponent,
        getComponent: getComponent
    }
}]);

app.factory("userPersistenceService", [
    "$cookies", function ($cookies) {
        var mobileNumber = undefined;

        return {
            setCookieData: function (mobile) {
                $cookies.put("mobileNumber", mobile);
            },
            getCookieData: function () {
                mobile = $cookies.get("mobileNumber");
                return mobile;
            },
            clearCookieData: function () {
                mobileNumber = undefined;
                $cookies.remove("mobileNumber");
            }
        }
    }
]);

app.controller('mainController', ['$scope', 'componentFactory', '$rootScope', '$http', '$state', '$uibModal',function ($scope, componentFactory, $rootScope, $http, $state, $modal) {

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

    $rootScope.openModal = function (data) {
        var modalInstance = $modal.open({
            templateUrl: 'components/modal/template.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                modalInstance: function () {
                    return modalInstance;
                },
                data: function () {
                    return data;
                }
            }
        });
        modalInstance.result.then(function (returnData) {
            return modalInstance;
        }, function () {
        });
        
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
                    templateUrl: 'components/navigation/view-template.html',
                    viewIndex: v
                });
            }
            if (views.length > 0) {
                $urlRouterProvider.otherwise(views[0].url);
            }
        }
    }

    // ADMdtp.setOptions({
    //     callType : 'gregorian',
    //     format : 'YYYY/MM/DD hh:mm',
    //     default : 'today',
    // })

});