const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})

const config = {
    PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    TOKEN_KEY: process.env.TOKEN_KEY,
    FRONT_URL: process.env.FRONT_URL
}

module.exports = {config}