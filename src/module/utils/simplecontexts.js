"use strict"

export const simpleCommandContexts = {
    'IR PARA LINHA' : {
        action: 'irParaLinha',
        param: true
    },
    'LIMPAR EDITOR': {
        action : 'clearEditor',
        param: false
    },
    'FINALIZAR RECONHECIMENTO': {
        action: 'finalizarReconhecimento',
        param: false
    },
    'TERMINAL RECONHECIMENTO': {
        action: 'finalizarReconhecimento',
        param: false
    },
    'RENDERIZAR': {
        action: 'renderContent',
        param: false
    },
    'ELEMENTO H1': {
        action: 'addElement',
        param: 'h1'
    },
    'ELEMENTO H2': {
        action: 'addElement',
        param: 'h2'
    },
    'ELEMENTO H3': {
        action: 'addElement',
        param: 'h3'
    },
    'ELEMENTO H4': {
        action: 'addElement',
        param: 'h4'
    },
    'ELEMENTO H 5': {
        action: 'addElement',
        param: 'h5'
    },
    'ELEMENTO H 6': {
        action: 'addElement',
        param: 'h6'
    },
    'ELEMENTO PARÁGRAFO': {
        action: 'addElement',
        param: 'p'
    },
    'ELEMENTO A': {
        action: 'addElement',
        param: 'a'
    },
    'ELEMENTO LINK': {
        action: 'addElement',
        param: 'link'
    },
    'ELEMENTO LISTA NÃO ORDENADA': {
        action: 'addElement',
        param: 'ul'
    },
    'ELEMENTO ITEM': {
        action: 'addElement',
        param: 'li'
    },
    'ELEMENTO ESTILO': {
        action: 'addElement',
        param: 'style'
    },
    'ELEMENTO HEADER': {
        action: 'addElement',
        param: 'header'
    },
    'ELEMENTO NAV': {
        action: 'addElement',
        param: 'nav'
    },
    'DESFAZER': {
        action: 'undoChange',
        param: false
    },
    'REVERTER': {
        action: 'undoChange',
        param: false
    },
    'CURSOR PARA CIMA': {
        action: 'cursorUp',
        param: false
    },
    'CURSOR PARA BAIXO': {
        action: 'cursorDown',
        param: false
    },
    'INÍCIO DA LINHA': {
        action: 'cursorToBeginLine',
        param: false
    },
    'FINAL DA LINHA': {
        action: 'cursorToEndLine',
        param: false
    },
    'APAGAR LINHA': {
        action: 'deleteLine',
        param: false
    },
    'IDENTAR': {
        action: 'insertTab',
        param: false
    },
    'TABULAR': {
        action: 'insertTab',
        param: false
    },
    'TABULAR MENOS': {
        action: 'removeTab',
        param: false
    },
    'IDENTAR MENOS': {
        action: 'removeTab',
        param: false
    },
    'ADICIONAR LINHA': {
        action: 'newLine',
        param: false
    },
    'INSERIR LINHA': {
        action: 'newLine',
        param: false
    },
    'NOVA LINHA': {
        action: 'newLine',
        param: false
    },
    'EXPANDIR ELEMENTO': {
        action: 'expandElement',
        param: false
    },
    'PRÓXIMA PALAVRA': {
        action: 'nextWord',
        param: false
    },
    'PALAVRA ANTERIOR': {
        action: 'previousWord',
        param: false
    },
    'PRÓXIMO CARACTERE': {
        action: 'nextCharacter',
        param: false
    },
    'CARACTERE ANTERIOR': {
        action: 'previousCharacter',
        param: false
    },
    'APAGAR CARACTERE ANTERIOR': {
        action: 'removePreviousChar',
        param: false
    },
    'APAGAR PRÓXIMO CARACTERE': {
        action: 'removeNextChar',
        param: false
    },
    'APAGAR PALAVRA ANTERIOR': {
        action: 'removePreviousWord',
        param: false
    },
    'APAGAR PRÓXIMA PALAVRA': {
        action: 'removeNextWord',
        param: false
    },
    'INSERIR TEXTO': {
        action: 'inserirTexto',
        param: true
    },
    'VALOR JAVASCRIPT VOID': {
        action: 'inserirValorJSVoid',
        param: false
    },
    'TEXTO LOREM IPSUM': {
        action: 'loremIpsun',
        param: false
    },
    'ESPAÇO EM BRANCO': {
        action: 'addEspacoBranco',
        param: false
    }
}
