const modelData = require('../models/modelData')

const Data = new modelData()

module.exports = {
    getPosts: async () => {
        try {
            return await Data.getPosts()
        } catch (error) {
            console.log(error)
        }
    },
    getPhotos: async () => {
        try {
            return await Data.getPhotos()
        } catch (error) {
            console.log(error)
        }
    }
}