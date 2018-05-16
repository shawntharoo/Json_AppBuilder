var components = [
    {
        col: 0,
        row: 0,
        name: 'Nav',
        sizeX: 12,
        sizeY: 6,
        data: {
            views: function (ctx, comp) {
                return [
                    {
                        name: 'SignUp',
                        url: '/signup',
                        title: 'SignUp',
                        components: [
                            {
                                col: 0,
                                row: 0,
                                name: 'SignUp',
                                sizeX: 12,
                                sizeY: 6,
                                data: {
                                    appTitle: function (ctx, comp) {
                                        return "Todos"
                                    },
                                    appTitleLogo: function (ctx, comp) {
                                        return "."
                                    },
                                    appTagLine: function (ctx, comp) {
                                        return "Create a Todos account and add your team members"
                                    },
                                    appButtonTitle: function (ctx, comp) {
                                        return "Continue with the phone number"
                                    },
                                    appTagLine2: function (ctx, comp) {
                                        return "Let's get started"
                                    },
                                    appButton2Title: function (ctx, comp) {
                                        return "Sign Up"
                                    },
                                    appEntry: function (ctx, comp) {
                                        return true
                                    },
                                    showRegForm: function (ctx, comp) {
                                        return false
                                    },
                                    showVeriForm: function (ctx, comp) {
                                        return false
                                    },
                                    verificationBtnTitle: function (ctx, comp) {
                                        return "Verify"
                                    }
                                },
                                styles: {
                                    appTitleStyle: function (ctx, comp) {
                                        return {
                                            '-webkit-transform': 'translate(-50%,-50%)',
                                            'transform': ' translate(-50%,-50%)',
                                            'position': 'absolute',
                                            top: '40%',
                                            left: '50%',
                                            width: '90%',
                                            'text-align': 'center'
                                        }
                                    },
                                    appTitleLogo1: function (ctx, comp) {
                                        return {
                                            'font-size': '60px',
                                            'font-weight': 'bold',
                                            color: '#fff',
                                        }
                                    },
                                    appTitleLogo: function (ctx, comp) {
                                        return {
                                            color: "#FB4372",
                                            'font-size': '60px'
                                        }
                                    },
                                    appTagLine: function (ctx, comp) {
                                        return {
                                            color: "#C8C8C8",
                                            'font-size': "16px",
                                            'font-weight': '300',
                                            display: 'block',
                                            'margin-top': '10%'
                                        }
                                    },
                                    appTagLine2: function (ctx, comp) {
                                        return {
                                            color: "#C8C8C8",
                                            'font-size': "16px",
                                            'font-weight': '300',
                                            'margin-top': '10%'
                                        }
                                    },
                                    appTitleButton: function (ctx, comp) {
                                        return {
                                            width: '100%',
                                            'max-width': '300px',
                                            'font-size': '16px',
                                            border: '2px solid #23B584',
                                            padding: '12px 0px',
                                            'margin-top': '5%',
                                            outline: 'none'
                                        }
                                    },
                                    inputField: function (ctx, comp) {
                                        return {
                                            'background-color': '#C8C8C8',
                                            height: '45px',
                                            width: '335px',
                                            'font-size': '16px',
                                            'font-weight': '300',
                                            padding: '10px',
                                            border: 'none',
                                            'margin-top': '10px',
                                            'outline-color': '#23B584'
                                        }
                                    },
                                    appTitleButton2: function (ctx, comp) {
                                        return {
                                            width: '100%',
                                            'font-size': '16px',
                                            border: '2px solid #23B584',
                                            padding: '12px 0px',
                                            'margin-top': '8%',
                                            outline: 'none',
                                        }
                                    },
                                    inputFieldCC: function (ctx, comp) {
                                        return {
                                            'background-color': '#C8C8C8',
                                            height: '45px',
                                            width: '60px',
                                            'font-size': '16px',
                                            'font-weight': '300',
                                            padding: '10px',
                                            border: 'none',
                                            'margin-top': '10px',
                                            'outline-color': '#23B584'
                                        }
                                    },
                                    inputFieldMN: function (ctx, comp) {
                                        return {
                                            'background-color': '#C8C8C8',
                                            height: '45px',
                                            width: '265px',
                                            'font-size': '16px',
                                            'font-weight': '300',
                                            padding: '10px',
                                            border: 'none',
                                            'margin-top': '10px',
                                            'outline-color': '#23B584'
                                        }
                                    },
                                    wrapperMobile: function (ctx, comp) {
                                        return {
                                            display: 'flex',
                                            'justify-content': 'space-between'
                                        }
                                    },
                                    errorMsg: function (ctx, comp) {
                                        return {
                                            color: "#FB4372",
                                            'font-size': "16px",
                                            'font-weight': '300',
                                            display: 'block',
                                            'margin-top': '10%'
                                        }
                                    }

                                },
                                emits: {
                                    onAppEnter: 'onAppEnter',
                                    onDetailsSubmit: 'onDetailsSubmit',
                                    onVerification: 'onVerification'
                                },
                                listens: [
                                    {
                                        name: 'onAppEnter',
                                        execute: function (e, o, l) {
                                            var scope = e.currentScope;
                                            scope.component.data.appTagLine = 'Let\'s get started'
                                            scope.component.data.appEntry = false
                                            scope.component.data.showRegForm = true
                                        }
                                    },
                                    {
                                        name: 'onDetailsSubmit',
                                        execute: function (e, o, l) {
                                            var scope = e.currentScope;
                                            if (scope.component.data.countryCode.includes('+')) {
                                                scope.component.data.countryCode = scope.component.data.countryCode.split('+')[1];
                                            }
                                            var data = {
                                                country_code: scope.component.data.countryCode,
                                                phone_number: o.data.mobileNumber
                                            }

                                            o.ajax.post('/api/accountsecurity/start', data).then(function successCallback(response) {
                                                console.log(response);
                                                scope.component.data.showRegForm = false;
                                                scope.component.data.showVeriForm = true;
                                                scope.component.data.appTagLine = 'Enter the verification code'
                                                scope.component.data.errorMsg = ''
                                            }, function errorCallback(response) {
                                                scope.component.data.errorMsg = response.data.message;
                                                console.log(response);

                                            });
                                        }
                                    },
                                    {
                                        name: 'onVerification',
                                        execute: function (e, o) {
                                            var scope = e.currentScope;
                                            var data = {
                                                firstname: o.data.firstName,
                                                lastname: o.data.lastName,
                                                country_code: o.data.countryCode,
                                                phone_number: o.data.mobileNumber,
                                                token: o.data.verifcationCode
                                            }
                                            o.ajax.post('/api/accountsecurity/verifyPhoneToken', data).then(function successCallback(response) {
                                                console.log(response);
                                                o.cookies.setCookieData(o.data.countryCode + o.data.mobileNumber);
                                                o.state.go('mainView');
                                            }, function errorCallback(response) {
                                                console.log(response);
                                            });
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'mainView',
                        url: '/mainview',
                        title: 'mainView',
                        components: [
                            {
                                col: 0,
                                row: 0,
                                name: 'mainView',
                                sizeX: 12,
                                sizeY: 6,
                                data: {
                                    appTitle: function (ctx, comp) {
                                        return "Todos"
                                    },
                                    appTitle2: function (ctx, comp) {
                                        return "."
                                    },
                                    initialState: function(ctx,comp){
                                        return "SignUp"
                                    },
                                    tabs: function (ctx, comp) {
                                        return [
                                            {
                                                name: 'upComing',
                                                title: 'Upcoming',
                                                url: '/upcoming',
                                                icon: 'icon-notifications',
                                                components: [

                                                    {
                                                        col: 0,
                                                        row: 0,
                                                        name: 'upComing',
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        data: {

                                                        },
                                                        styles: {
                                                        },
                                                        emits: {

                                                        },
                                                        listens: [

                                                        ]
                                                    },



                                                ],
                                                styles: {
                                                    tabItemouterLayer: function (ctx, comp) {
                                                        return {
                                                            'background-color': '#ffffff',
                                                            'overflow-y': 'scroll'
                                                        }

                                                    }
                                                },
                                                emits: {
                                                    initialDataLoad: 'initialDataLoad'
                                                },
                                                listens: [
                                                    {
                                                        name: 'initialDataLoad',
                                                        execute: function (e, o) {
                                                            scope = e.currentScope;
                                                            var data = {
                                                                phone_number: o.cookies.getCookieData()
                                                            }
                                                            o.ajax.post('/api/task/upcomingTasks', data).then(
                                                                function successCallback(response) {
                                                                    scope.component.data.tasks = response.data;
                                                                    console.log(response.data)
                                                                },
                                                                function errorCallback(response) {
                                                                    console.log(response)
                                                                }
                                                            
                                                            )}
                                                    }
                                                ]

                                            }, {
                                                name: 'projectsList',
                                                title: 'Projects',
                                                url: '/projectslist',
                                                icon: 'icon-work',
                                                components: [
                                                    {
                                                        col: 0,
                                                        row: 0,
                                                        name: 'projectsList',
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        data: {

                                                        },
                                                        styles: {

                                                        },
                                                        emits: {

                                                        },
                                                        listens: [

                                                        ]
                                                    }
                                                ],
                                                styles: {
                                                    tabItemouterLayer: function (ctx, comp) {
                                                        return {
                                                            'background-color': '#ffffff',
                                                            'overflow-y': 'scroll'
                                                        }

                                                    }
                                                },
                                                emits: {

                                                },
                                                listens: [

                                                ]
                                            },
                                            {
                                                name: 'allTasks',
                                                title: 'All Tasks',
                                                url: '/alltasks',
                                                icon: 'icon-favorite',
                                                components: [

                                                    {
                                                        col: 0,
                                                        row: 0,
                                                        name: 'allTasks',
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        data: {

                                                        },
                                                        styles: {
                                                        },
                                                        emits: {

                                                        },
                                                        listens: [

                                                        ]
                                                    },



                                                ],
                                                styles: {
                                                    tabItemouterLayer: function (ctx, comp) {
                                                        return {
                                                            'background-color': '#ffffff',
                                                            'overflow-y': 'scroll'
                                                        }

                                                    }
                                                },
                                                emits: {

                                                },
                                                listens: [

                                                ]

                                            }
                                        ]
                                    }
                                },
                                styles: {
                                    appTitle: function (ctx, comp) {
                                        return {
                                            'font-size': '20px',
                                            'color': '#fff',
                                            'font-weight': 700,
                                            padding: '10px',
                                            display: 'flex',
                                            'justify-content': 'left'

                                        }
                                    },
                                    appTitle2: function (ctx, comp) {
                                        return {
                                            color: '#FB4372'
                                        }
                                    },
                                    tabTitle: function (ctx, comp) {
                                        return {
                                            'font-size': '20px',
                                            color: '#fff',
                                            'font-weight': 300,
                                            'margin-left': '10px',
                                            'margin-top': '30px',
                                            'display': 'block'
                                        }
                                    },
                                    tabTitleSelected: function (ctx, comp) {
                                        return {
                                            'font-weight': '300',
                                            'margin-left': '10px',
                                            'color': '#C8C8C8'
                                        }
                                    },
                                    tabListUl: function (ctx, comp) {
                                        return {
                                            'list-style': 'none',
                                            'display': 'flex',
                                            'justify-content': 'space-evenly',
                                            'color': '#C8C8C8',
                                            'font-size': '32px',
                                            'margin': '0px',
                                            'padding': '0px'
                                        }
                                    },
                                    tabListLi: function (ctx, comp) {
                                        return {
                                            'width': '33.33%',
                                            'text-align': 'center'
                                        }
                                    },
                                    tabHeaderWrap: function (ctx, comp) {
                                        return {
                                            'padding-top': '20px',
                                            position: 'relative',
                                            display: 'block',
                                            'z-index': 1000,
                                            '-webkit -box-shadow': '1px 1px 3px 0px rgba(0, 0, 0, 0.5)',
                                            '-moz -box-shadow': '1px 1px 3px 0px rgba(0, 0, 0, 0.5)',
                                            'box-shadow': '1px 1px 3px 0px rgba(0, 0, 0, 0.5)'
                                        }
                                    },
                                    mainOuterLayout: function (ctx, comp) {
                                        return {
                                            overflow: 'hidden'
                                        }
                                    }

                                },
                                emits: {
                                    onTabSelect: 'onTabSelect',
                                    initialDataLoad: 'initialDataLoad'
                                },
                                listens: [
                                    {
                                        name: 'onTabSelect',
                                        execute: function (e, o) {
                                            var scope = e.currentScope;
                                            scope.template = o.templateUrl;
                                            scope.tabTitleSelected = o.title;
                                            scope.comp = o;
                                            scope.name = o.name;
                                        }
                                    },
                                    {
                                        name: 'initialDataLoad',
                                        execute: function (e, o) {
                                            var scope = e.currentScope;
                                            scope.comp = scope.components[0];
                                            scope.template = scope.components[0].templateUrl;
                                            scope.tabTitleSelected = scope.components[0].title;
                                            scope.name = scope.components[0].name;
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        styles: {
            outerLayout: function (ctx, comp) {
                return {
                    'overflow-y': 'hidden'
                }
            }
        }
    }
]