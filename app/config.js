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
                                                o.state.go('gridView');
                                            }, function errorCallback(response) {
                                                scope.component.data.errorMsg = response.data.message;
                                                console.log(response);
                                            });
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'gridView',
                        url: '/gridview',
                        title: 'Grid',
                        components: [
                            {
                                col: 0,
                                row: 0,
                                name: 'appheader',
                                sizeX: 12,
                                sizeY: 1,
                                data: {
                                    appTitle: function (ctx, comp) {
                                        return "Todos"
                                    },
                                    appTitle2: function (ctx, comp) {
                                        return "."
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

                                },
                                listens: [

                                ]
                            },
                            {
                                name: 'tabView',
                                col: 0,
                                row: 1,
                                sizeX: 12,
                                sizeY: 6,
                                data: {
                                    tabs: function (ctx, comp) {
                                        return [
                                            {
                                                name: 'Upcomming',
                                                title: 'Upcomming',
                                                icon: 'icon-notifications',
                                                components: [
                                                    {
                                                        name: 'viewheader',
                                                        col: 0,
                                                        row: 2,
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        data: {
                                                            title : function (ctx, comp) {
                                                                return "Today"
                                                            },
                                                            value : function (ctx, comp) {
                                                                return new Date();
                                                            },
                                                            buttonName : function (ctx, comp) {
                                                                return "Add Task +"
                                                            }

                                                        },
                                                        styles: {
                                                            dateHeadToday: function (ctx, comp) {
                                                                return {
                                                                    color: "#23B584",
                                                                    'font-weight': '700'
                                                                }
                                                            },
                                                            dateWrapper: function (ctx, comp) {
                                                                return {
                                                                    width: '100%',
                                                                    width: '95%',
                                                                    margin: '26px auto',
                                                                    display: 'flex',
                                                                    'justify-content': 'space-between'
                                                                }
                                                            },
                                                            dateHeadDate: function (ctx, comp) {
                                                                return {
                                                                    color: '#7B7979',
                                                                    'margin-left': '5px'
                                                                }
                                                            },
                                                            addTaskBtn: function (ctx, comp) {
                                                                return {
                                                                    'font-weight': 'bold',
                                                                    color: '#FB4372'

                                                                }
                                                            },
                                                            tabItemouterLayer: function (ctx, comp) {
                                                                return {
                                                                    'background-color': '#f7f7f7',
                                                                    'overflow-y': 'scroll'
                                                                }

                                                            },
                                                            
                                                        },
                                                        emits: {
                                                            initialDataLoad: 'initialDataLoad'
                                                        },
                                                        listens: [
                                                            {
                                                                name: 'initialDataLoad',
                                                                execute: function (e, o) {
                                                                    scope = e.currentScope;
                                                                    scope.todayDate = new Date();
                                                                }
                                                            }
                                                        ]

                                                    },
                                                    {
                                                        name: 'list',
                                                        col: 0,
                                                        row: 1,
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        data: {},
                                                        styles: {
                                                            tabItemouterLayer: function (ctx, comp) {
                                                                return {
                                                                    'background-color': '#f7f7f7',
                                                                    'overflow-y': 'scroll'
                                                                }

                                                            },
                                                            dateHeadToday: function (ctx, comp) {
                                                                return {
                                                                    color: "#23B584",
                                                                    'font-weight': '700'
                                                                }
                                                            },
                                                            dateWrapper: function (ctx, comp) {
                                                                return {
                                                                    width: '100%',
                                                                    width: '95%',
                                                                    margin: '26px auto',
                                                                    display: 'flex',
                                                                    'justify-content': 'space-between'
                                                                }
                                                            },
                                                            dateHeadDate: function (ctx, comp) {
                                                                return {
                                                                    color: '#7B7979',
                                                                    'margin-left': '5px'
                                                                }
                                                            },
                                                            upcomingItem: function (ctx, comp) {
                                                                return {

                                                                    height: '50px',
                                                                    'background-color': '#fff',
                                                                    'border-top': '0.25px solid #ccc',
                                                                    'background-color': 'rgb(255, 255, 255)',
                                                                    'border-top': '0.25px solid rgb(204, 204, 204)',
                                                                    'padding': '15px 10px',
                                                                    'display': 'flex',
                                                                    'justify-content': 'space-between',
                                                                    color: '#202632',
                                                                    'font-weight': 300,
                                                                    'font-size': '14px'
                                                                }
                                                            },
                                                            itemLeft: function (ctx, comp) {
                                                                return {
                                                                    "order": "1",
                                                                    "display": "flex",
                                                                    "flexDirection": "column",
                                                                    width: '70%'
                                                                }
                                                            },
                                                            itemTime: function (ctx, comp) {
                                                                return {
                                                                    'margin-top': 'auto'
                                                                }
                                                            },
                                                            itemRight: function (ctx, comp) {
                                                                return {
                                                                    order: 2,
                                                                    display: 'flex'
                                                                }
                                                            },
                                                            itemProject: function (ctx, comp) {
                                                                return {
                                                                    'margin-top': 'auto',
                                                                    "marginTop": "auto",
                                                                    "background-color": "rgb(35, 181, 132)",
                                                                    "color": "rgb(255, 255, 255)",
                                                                    "font-size": "10px",
                                                                    "letter-spacing": "0.5px",
                                                                    "width": "80px",
                                                                    "text-align": "center",
                                                                    "font-weight": "700",
                                                                    "text-transform": "uppercase",
                                                                    "padding": "6px 0"
                                                                }
                                                            },
                                                            addTaskButtonWrap: function (ctx, comp) {
                                                                return {
                                                                    width: '64px',
                                                                    height: '64px',
                                                                    position: 'fixed',
                                                                    bottom: '30px'
                                                                }
                                                            },
                                                            itemStatus: function (ctx, comp) {
                                                                return {
                                                                    color: '#FB4372',
                                                                    'font-weight': 'bold',
                                                                    'font-size': '11px',
                                                                    'letter-spacing': '0.5px',
                                                                    'text-transform': 'uppercase',
                                                                    'display': 'none',
                                                                    'margin-left': '10px'
                                                                }
                                                            },
                                                            addTaskBtn: function (ctx, comp) {
                                                                return {
                                                                    'font-weight': 'bold',
                                                                    color: '#FB4372'

                                                                }
                                                            },
                                                            modalBack: function (ctx, comp) {
                                                                return {
                                                                    'font-size': '32px'
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
                                                                    scope.todayDate = new Date();
                                                                    //scope.component.data.tasks = new Array();

                                                                    var data = {
                                                                        phone_number: o.cookies.getCookieData(),
                                                                        status: 'pending'
                                                                    }
                                                                    o.ajax.post('/api/task/upcomingTasks', data).then(
                                                                        function successCallback(response) {

                                                                            for (var i = 0; i < response.data.length; i++) {
                                                                                if (scope.todayDate < new Date(response.data[i].due_date)) {
                                                                                    response.data[i].status = 'upcoming'
                                                                                } else {
                                                                                    response.data[i].status = 'overdue'
                                                                                }

                                                                            }
                                                                            scope.component.data.tasks = response.data;
                                                                            console.log(response.data)
                                                                        },
                                                                        function errorCallback(response) {
                                                                            console.log(response)
                                                                        }

                                                                    )
                                                                }
                                                            }
                                                        ]

                                                    },
                                                ],
                                                styles: {

                                                },
                                                emits: {
                                                },
                                                listens: [
                                                ]

                                            },
                                            {
                                                name: 'projectsList',
                                                title: 'Projects',
                                                icon: 'icon-work',
                                                components: [
                                                    {
                                                        name: 'list',
                                                        col: 0,
                                                        row: 1,
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        components: [
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
                                                ],
                                                styles: {

                                                },
                                                emits: {

                                                },
                                                listens: [

                                                ]
                                            },
                                            {
                                                name: 'allTasks',
                                                title: 'All Tasks',
                                                icon: 'icon-favorite',
                                                components: [
                                                    {
                                                        name: 'list',
                                                        col: 0,
                                                        row: 1,
                                                        sizeX: 12,
                                                        sizeY: 6,
                                                        components: [
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
                                                ],
                                                styles: {

                                                },
                                                emits: {

                                                },
                                                listens: [

                                                ]

                                            }
                                        ]
                                    },
                                    selectedTab: function (ctx, comp) {
                                        return comp.data.tabs[0];
                                    }
                                },
                                styles: {
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
                                },
                                listens: [
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