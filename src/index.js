//Application's entry point
const Application = require('./server/app/Application')

function main(){
    const app = new Application()
    app.loadMiddlewares()
    app.run()
}

main()
