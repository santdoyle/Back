const routerLogin = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const {config} = require('../../config')

/**
 * Endpoint POST /login.
 * Set user data on request body as JSON format.
 * Return Json respond.
 */
routerLogin.post('/login', (req, resp, next) => {
    passport.authenticate('login', (err, user, info) => {
        try {
            if (err) resp.status(500).json({message: 'An error ocurred, try again.'})
            
            if (info.code === 200){
                const payload = {
                    email: user
                }

                const token = jwt.sign(payload, config.TOKEN_KEY, {
                    expiresIn: '2h'
                })

                resp.status(200).json({info, token})
            }else{
                resp.status(200).json(info)
            }
        } catch (error) {
            console.log(error)
        }

    })(req, resp, next)
})

module.exports = routerLogin