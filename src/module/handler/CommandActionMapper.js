"use strict"

import {simpleCommandContexts as simpleContexts} from '../utils/simplecontexts.js'
import {multiContextActions as multiContexts} from '../utils/multicontexts.js'

class CommandActionMapper {

    constructor(){
        this.simpleActions = this.loadSimpleActions()
        this.multiActions = this.loadMultiActions()
    }

    getSimpleAction(command){
        return this.simpleActions[command]
    }

    getMultiAction(context){
        return this.multiActions[context]
        // const result = this.multiActions[context]
        // if(result){
        //     return result
        // }
        // return null
    }

    loadSimpleActions(){
        return simpleContexts
    }

    loadMultiActions(){
        return multiContexts
    }
}

export default CommandActionMapper