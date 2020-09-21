const express = require('express')

class App {

    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
    }

    loadMiddlewares(){

    }

    run(){
        this.app.listen(this.port, ()=>{
            console.log(`Application listening on port ${this.port}`);
        })
    }


}

module.exports = App