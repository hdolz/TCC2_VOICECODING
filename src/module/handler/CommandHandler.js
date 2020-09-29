"use strict"

import CommandActionMapper from './CommandActionMapper.js'
import Contextualizer from './Contextualizer.js'

class CommandHandler {

    constructor(editor, status){
        this.editor = editor
        this.contextualizer = new Contextualizer()
        this.actionMapper = new CommandActionMapper()
        this.status = status
    }

    handleRecon(recon){
        const hasContext = this.contextualizer.checkContext(recon)
        if(hasContext !== null){
            if(hasContext){
                let context = this.contextualizer.getContext()
                const mapper = this.actionMapper.getMultiAction(context)
                if(mapper){
                    if(mapper.action) {
                        if(mapper.param){
                            const res = this.editor.triggerAction(mapper.action, recon)
                            //se a action retornar true, finaliza o contexto em questão
                            if(res) {
                                mapper.nextContext = null
                                mapper.stillContext = false
                            }
                        } else {
                            this.editor.triggerAction(mapper.action)
                        }
                    }
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