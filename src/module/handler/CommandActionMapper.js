"use strict"

class CommandActionMapper {

    constructor(){
        this.actions = this.loadActions()
    }

    getAction(command){
        return this.actions[command]
    }

    loadActions(){
        return {
            'INICIAR' : 'initEditor',
            'LIMPAR EDITOR': 'clearEditor'
        }
    }
}

export default CommandActionMapper