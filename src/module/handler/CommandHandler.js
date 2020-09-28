"use strict"

import CommandActionMapper from './CommandActionMapper.js'

class CommandHandler {

    constructor(editor){
        this.subcontextFlag = null
        this.editor = editor
        this.multiContextCommands = ['IR PARA LINHA', 'MANIPULAR ELEMENTO', "INSERIR TEXTO", "INSERIR CARACTERE"]
        this.actionMapper = new CommandActionMapper()
    }

    handleRecon(recon){
        //se a flag de subcontexto ja está setada, indica que o texto que chegou será parte de um comando subcontexto de um comando anterior
        //caso contrário, verifica no método contextChecker()
        let contextCheck = this.subcontextFlag ? {check: true, context: {hasSubContext: true, subcontext : subcontextFlag}} : this.contextChecker(recon) 
        if(contextCheck.check){ //se check == true, indica que deve tratar de um subcomando
            console.log('Multi context');
            // const contextControllerResult = contextController(contextCheck.context, recon)
            // console.log('contextControllerResult: ', contextControllerResult)
            // if(contextControllerResult !== null){
            //     subcontextFlag = contextControllerResult
            // } else {
            //     subcontextFlag = null
            // }
        } else { // se check == false, indica que é um comando de contexto simples
            console.log('Reconhecido: ' + recon);
            const action = this.actionMapper.getAction(recon)
            this.editor.triggerAction(action)
            // switch (recon.toUpperCase().trim()) {
            //     case 'INICIAR':
            //         initEditor();
            //         break;
            //     case 'LIMPAR EDITOR':
            //         clearEditor()
            //         break;
            //     case 'FINALIZAR RECONHECIMENTO':
            //         finalizarReconhecimento()
            //         break;
            //     case 'TERMINAL RECONHECIMENTO':
            //         finalizarReconhecimento()
            //         break;
            //     case 'RENDERIZAR':
            //         renderContent()
            //         break
            //     case 'ELEMENTO H1':
            //         addElement('h1');
            //         break;
            //     case 'ELEMENTO H2':
            //         addElement('h2')
            //         break
            //     case 'ELEMENTO H3':
            //         addElement('h3')
            //         break
            //     case 'ELEMENTO H4':
            //         addElement('h4')
            //         break
            //     case 'ELEMENTO H5':
            //         addElement('h5')
            //         break
            //     case 'ELEMENTO H6':
            //         addElement('h6')
            //         break
            //     case 'ELEMENTO PARÁGRAFO':
            //         addElement('p')
            //         break
            //     case 'ELEMENTO A':
            //         addElement('a')
            //         break
            //     case 'ELEMENTO LINK':
            //         addElement('link')
            //         break
            //     case 'ELEMENTO LISTA NÃO ORDENADA':
            //         addElement('ul')
            //         break
            //     case 'ELEMENTO LISTA ORDENADA':
            //         addElement('ol')
            //         break
            //     case 'ELEMENTO ITEM LISTA':
            //         addElement('li')
            //         break
            //     case 'DESFAZER':
            //         undoChange()
            //         break
            //     case 'REVERTER':
            //         undoChange()
            //         break
            //     case 'CURSOR PARA CIMA':
            //         cursorUp()
            //         break
            //     case 'CURSOR PARA BAIXO':
            //         cursorDown()
            //         break
            //     case 'INÍCIO DA LINHA':
            //         cursorToBeginLine()
            //         break
            //     case 'FINAL DA LINHA':
            //         cursorToEndLine()
            //         break
            //     case 'IR PARA LINHA 10':
            //         gotoLine()
            //         break
            //     case 'APAGAR LINHA':
            //         deleteLine()
            //         break
            //     case 'IDENTAR':
            //         insertTab()
            //         break
            //     case 'TABULAR':
            //         insertTab()
            //         break
            //     case 'TABULAR MENOS':
            //         removeTab()
            //         break
            //     case 'IDENTAR MENOS':
            //         removeTab()
            //         break
            //     case 'ADICIONAR LINHA':
            //         newLine()
            //         break
            //     case 'INSERIR LINHA':
            //         newLine()
            //         break
            //     case 'NOVA LINHA':
            //         newLine()
            //         break
            //     case 'EXPANDIR ELEMENTO':
            //         expandElement()
            //         break
            //     case 'PRÓXIMA PALAVRA':
            //         nextWord()
            //         break
            //     case 'PALAVRA ANTERIOR':
            //         previousWord()
            //         break
            //     case 'PRÓXIMO CARACTERE':
            //         nextCharacter()
            //         break
            //     case 'CARACTERE ANTERIOR':
            //         previousCharacter()
            //         break
            //     case 'APAGAR CARACTERE ANTERIOR':
            //         removePreviousChar()
            //         break
            //     case 'APAGAR PRÓXIMO CARACTERE':
            //         removeNextChar()
            //         break
            //     case 'APAGAR PALAVRA ANTERIOR':
            //         removePreviousWord()
            //         break
            //     case 'APAGAR PRÓXIMA PALAVRA':
            //         removeNextWord()
            //         break
            //     default:
            //         console.log('Não reconhecido');
        }

    }

    contextChecker(recon){
        //check - indica se achou ou não comando de contexto multiplo
        //context - retorna qual o comando de contexto em questao
        let result = {
            check: false,
            context: null
        }
        for(let i=0;i<this.multiContextCommands.length;i++){
            //verifica se texto extraido é parte de um comando de contexto
            if(recon.toUpperCase().includes(this.multiContextCommands[i])) {
                result.check = true;
                result.context = this.multiContextCommands[i]
                break;
            }
        }
        // return objeto informando se tem contexto e qual o contexto
        return result
    }
}

export default CommandHandler