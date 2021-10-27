const express = require('express')
const App = express()
const passport = require('passport')
const cors = require('cors')
const cookieParser = require('cookie-parser')

//Config files
const {config} = require('./config')
require('./src/auth/passportLocal')

//Routers requires
const routerLogin = require('./src/routers/routerLogin')
const routerData = require('./src/routers/routerData')

//Middlewares
App.use(express.urlencoded({extended: true}))
App.use(express.json())
App.use(passport.initialize())
App.use(cookieParser())
App.use(cors({
    origin: config.FRONT_URL,
    allowedHeaders: ['x-access-token', 'Content-Type']
}))
App.use(routerLogin)
App.use(routerData)

const server = App.listen(config.PORT, () => {
    console.log(`Server running on ${server.address().port}`)
})