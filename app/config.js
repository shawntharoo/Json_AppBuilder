var components = [
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
            appButton2Title: function(ctx,comp){
                return "Sign Up"
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
                    display: 'none',
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
                    display: 'none',
                    'background-color': '#C8C8C8',
                    height: '45px',
                    width: '335px',
                    'font-size': '16px',
                    'font-weight': '300',
                    padding: '10px',
                    border: 'none',
                    'margin-top':'10px',
                    'outline-color':'#23B584'
                }
            },
            appTitleButton2: function(ctx,comp){
                return {
                    width: '100%',
                    'font-size': '16px',
                    border: '2px solid #23B584',
                    padding: '12px 0px',
                    'margin-top': '8%',
                    outline: 'none',
                    display:'none'
                }
            },
            inputFieldCC: function(ctx,comp){
                return{
                    display: 'none',
                    'background-color': '#C8C8C8',
                    height: '45px',
                    width: '60px',
                    'font-size': '16px',
                    'font-weight': '300',
                    padding: '10px',
                    border: 'none',
                    'margin-top':'10px',
                    'outline-color':'#23B584'
                }
            },
            inputFieldMN: function(ctx,comp){
                return{
                    display: 'none',
                    'background-color': '#C8C8C8',
                    height: '45px',
                    width: '265px',
                    'font-size': '16px',
                    'font-weight': '300',
                    padding: '10px',
                    border: 'none',
                    'margin-top':'10px',
                    'outline-color':'#23B584'
                }
            },
            wrapperMobile: function(ctx,comp){
               return {
                display: 'flex',
                'justify-content': 'space-between'
               }
            }

        },
        emits: {
            onDetailsSubmit: 'onDetailsSubmit'
        },
        listens: [
            {
                name:'onDetailsSubmit',
                execute: function(e,o,l){
                    var data = {
                        countryCode : o.data.countryCode,
                        mobileNumber : o.data.mobileNumber
                    }
                    o.ajax.post('/api/verification/start',data).success(function(data, status, headers, config){
                        console.log("Phone Verification Success success: ", data);
                    }).error(function (data, status, headers, config){
                        console.log("Verification error: ", data);
                    });
                    
                    console.log(o.data);
                }
            }
        ]
    }
]