"use strict"

import CommandActionMapper from './CommandActionMapper.js'
import Contextualizer from './Contextualizer.js'

class CommandHandler {

    constructor(editor){
        this.editor = editor
        this.contextualizer = new Contextualizer()
        // this.subcontextFlag = null
        // this.multiContextCommands = ['IR PARA LINHA', 'MANIPULAR ELEMENTO', "INSERIR TEXTO", "INSERIR CARACTERE"]
        this.actionMapper = new CommandActionMapper()
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
            } else {
                //comando simples
                console.log('comando simples');
                console.log(hasContext.context);
                let context = this.contextualizer.getContext()
                const mapper = this.actionMapper.getSimpleAction(context)
                console.log('mapper');
                console.log(mapper);
                if(mapper.param){
                    this.editor.triggerAction(mapper.action, recon)
                } else {
                    this.editor.triggerAction(mapper.action)
                }
                this.contextualizer.setContext(null)
            }
        } else {
            console.log('comando inexistente');
        }
    }

}

export default CommandHandler