"use strict"

import {multiCommandContexts as multi} from '../utils/multicontexts.js'
import {simpleCommandContexts as simpleContexts} from '../utils/simplecontexts.js'

class Contextualizer {

    constructor(){
        this.hasContext = false
        this.context = null
    }

    getContext(){
        return this.context
    }

    setContext(context){
        this.context = context
    }

    setHasContext(stillContext){
        this.hasContext = stillContext
    }

    checkContext(recon){
        if(this.hasContext){
            if(this.context){
                return this.hasContext
            } else {
                let found = this.findMultiContext(recon)
                if(found){
                    this.context = found
                    return this.hasContext
                }
            }
        } else {
            let found = this.findSimpleContext(recon)
            if(found){
                this.hasContext = false
                this.context = found
                return this.hasContext
            }
            found = this.findMultiContext(recon)
            if(found){
                this.hasContext = true
                this.context = found
                return this.hasContext
            }
        }
        return null
    }

    findMultiContext(recon){
        const context = multi[recon]
        if(context){
            return context
        }
        return null
    }

    findSimpleContext(recon){
        let context = null
        const contextArray = Object.keys(simpleContexts)
        context = contextArray.includes(recon)
        if(context){
            return contextArray[contextArray.indexOf(recon)]
        } else {
            context = null
            for(let i=0;i<contextArray.length;i++){
                if(recon.includes(contextArray[i])){
                    context = contextArray[i]
                    break
                }
            }
            if(context){
                return context
            }
            return null
        }
    }
}

export default Contextualizer