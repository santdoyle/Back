const axios = require('axios')

class Posts{
    async getPosts(){
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts')
        } catch (error) {
            console.log(error)
        }
    }

    async getPhotos(){
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/photos')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Posts