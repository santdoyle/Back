const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const {config} = require('../../config')

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    //Check empty fields
    if(email === '' && password === ''){
        return done(null, false, {
            code: 500,
            message: `Email and password can't be empty.`
        })
    }
    
    //Check email
    if(email === config.USER){
        const checkPass = await bcrypt.compare(password, config.PASSWORD)

        if(checkPass === true){
            return done(null, config.USER, {
                code: 200,
                message: 'You are logged in.'
            })
        }else{
            return done(null, false, {
                code: 500,
                message: `Password isn't correct.`
            })
        }
    }else{
        return done(null, false, {
            code: 500,
            message: `Email doesn't exists.`
        })
    }
    
}))
