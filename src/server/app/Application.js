const express = require('express')
const exphbs = require('express-handlebars')
const AppRouter = require('../router/AppRouter')
const path = require('path')

class Application {

    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.router = new AppRouter()
    }

    loadMiddlewares(){
        //express-handlebars middleware
        this.app.set('view engine', 'handlebars')
        this.app.set('views', path.join(__dirname, '../../views'))
        //define express template engine
        this.app.engine('handlebars',exphbs({
            extname: 'handlebars',
            layoutsDir: path.join(__dirname,'../../views/layouts')
        }))
        //application router
        this.app.use(this.router.getRouter())
        //static modules path
        this.app.use('/public', express.static(path.join(__dirname, '../../views/public')));
        //application modules
        this.app.use('/module', express.static(path.join(__dirname, '../../module')))

    }

    run(){
        this.app.listen(this.port, ()=>{
            console.log(`-> Application listening on port ${this.port}`)
        })
    }
    
}

module.exports = Application