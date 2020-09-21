//Application's entry point
const App = require('./server/App')

function main(){
    const app = new App()
    app.run()
}

main()
