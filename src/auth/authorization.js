const jwt = require('jsonwebtoken')
const {config} = require('../../config')

function Auth(req, resp, next){
    const token = req.headers['x-access-token']
    if(!token){
        return resp.json({
            code: 500,
            message: 'Invalid token, you are not allowed to see this page.'
        })
    }else{

        jwt.verify(token, config.TOKEN_KEY, (err, user) => {
            
            if (err) {
                return resp.json({ 
                    code: 500,
                    message: 'Invalid token, you are not allowed to see this page. Please login.' 
                })
            }
            req.user = user
            next()
        })

    }
}

module.exports = Auth