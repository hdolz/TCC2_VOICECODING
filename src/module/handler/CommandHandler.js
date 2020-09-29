"use strict"

import CommandActionMapper from './CommandActionMapper.js'
import Contextualizer from './Contextualizer.js'
import Status from '../status/Status.js'

class CommandHandler {

    constructor(editor, status){
        this.editor = editor
        this.contextualizer = new Contextualizer()
        this.actionMapper = new CommandActionMapper()
        this.status = status
    }

    handleRecon(recon){
        console.log('Recon: ', recon);
        const hasContext = this.contextualizer.checkContext(recon)
        if(hasContext !== null){
            if(hasContext){
                console.log('comando de contexto');
                let context = this.contextualizer.getContext()
                const mapper = this.actionMapper.getMultiAction(context)
                //se o mapper não for null
                if(mapper){
                    if(mapper.action) {
                        if(mapper.param){
                            const res = this.editor.triggerAction(mapper.action, recon)
                            if(res) {
                                mapper.nextContext = null
                                mapper.stillContext = false
                                console.log('setou outro contexto de saida de multi');
                            }
                        } else {
                            this.editor.triggerAction(mapper.action)
                        }
                    }
                    // if(mapper.nextContext) this.contextualizer.setContext(mapper.nextContext)
                    console.log('contexto proximo: ', mapper.nextContext);
                    this.contextualizer.setContext(mapper.nextContext)
                    this.contextualizer.setHasContext(mapper.stillContext)
                }
                this.status.setStatus('Comando contexto: '+recon)
            } else {
                //comando simples
                let context = this.contextualizer.getContext()
                const mapper = this.actionMapper.getSimpleAction(context)
                if(mapper.param){
                    if(mapper.param === true){
                        this.editor.triggerAction(mapper.action, recon)
                    } else {
                        this.editor.triggerAction(mapper.action, mapper.param)
                    }
                } else {
                    this.editor.triggerAction(mapper.action)
                }
                this.contextualizer.setContext(null)
                this.status.setStatus('Comando simples: '+recon)
            }
        } else {
            this.status.setStatus('Comando de voz inexistente')
            setTimeout(()=>{
                this.status.setStatus('')
            }, 2000)
        }
    }

}

export default CommandHandler