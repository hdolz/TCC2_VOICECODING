const router = require('express').Router()

class AppRouter {

    constructor(){
         this.load()
    }

    load(){
        //return app frontend
        router.get('/', (req, res)=>{
            res.render('home')
        })
    }

    getRouter(){
        return router
    }

}

module.exports = AppRouter