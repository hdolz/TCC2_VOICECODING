"use strict"

import CommandActionMapper from './CommandActionMapper.js'
import {simpleContexts as simple} from '../utils/simplecontexts.js'
import {multiContexts as multi} from '../utils/multicontexts.js'

class Contextualizer {

    constructor(){
        this.hasContext = false
        this.context = null
        this.actionMapper = new CommandActionMapper()
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
        //procura o contexto do recon multi
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
        for(let i=0;i<simple.length;i++){
            if(recon.includes(simple[i])){
                context = simple[i]
                break
            }
        }
        if(context){
            return context
        }
        console.log('retornou nulo no find simples');
        return null
    }
}

export default Contextualizer