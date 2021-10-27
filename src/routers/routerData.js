const routerData = require('express').Router()
const Auth = require('../auth/authorization')
const controllerData = require('../controllers/controllerData')

routerData.get('/posts-list', Auth, async (req, resp) => {
    const posts = await controllerData.getPosts()

    if(posts.data.length){
        resp.status(200).json(posts.data)
    }else{
        resp.status(200).json({
            message: `Posts list it's empty.`
        })
    }
})


routerData.get('/photos-list', Auth, async (req, resp) => {
    try {
        const {limit, offset} = req.query
        const photos = await controllerData.getPhotos()
        
        if(photos.data.length){
            if(limit && offset){
                resp.status(200).json(photos.data.slice(offset, limit))
            }
        }else{
            resp.status(200).json({
                message: `Posts list it's empty.`
            })
        }

    } catch (error) {
        console.log(error)
    }
    
})




module.exports = routerData