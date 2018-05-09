#### Verify Phone Verification
- Phone Verification
- SMS or Voice Call

### Setup
- Clone this repo
- Run `npm install`
- Register for a [Twilio Account](https://www.twilio.com/).
- Setup an Account Security app via the [Twilio Console](https://twilio.com/console).
- Save a file as `.env` and add following commands 
(ACCOUNT_SECURITY_API_KEY = 'key'
PORT = 1337)
- Check and make sure MongoDB is up and running
    - On *NIX, may be as easy as running `mongod` in a new tab.
- Run `nodemon .` or `node .` from the cloned repo to run the app