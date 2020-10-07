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
    'ATRIBUTO BACKGROUND': {
        action: 'addCssAttribute',
        param: 'background'
    },
    'ATRIBUTO PREENCHIMENTO': {
        action: 'addCssAttribute',
        param: 'padding'
    },
    'ATRIBUTO DISPLAY': {
        action: 'addCssAttribute',
        param: 'display'
    },
    'ATRIBUTO ALINHAR ITENS': {
        action: 'addCssAttribute',
        param: 'align-items'
    },
    'ATRIBUTO COLOR': {
        action: 'addCssAttribute',
        param: 'color'
    },
    'ATRIBUTO TAMANHO DE FONTE': {
        action: 'addCssAttribute',
        param: 'font-size'
    },
    'ATRIBUTO MARGEM ESQUERDA': {
        action: 'addCssAttribute',
        param: 'margin-left'
    },
    'ATRIBUTO TRANSIÇÃO': {
        action: 'addCssAttribute',
        param: 'transition'
    },
    'ATRIBUTO ESTILO DE LISTA': {
        action: 'addCssAttribute',
        param: 'list-style'
    },
    'ATRIBUTO DECORAÇÃO DE TEXTO': {
        action: 'addCssAttribute',
        param: 'text-decoration'
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
    },
    'CARACTERE,': {
        action: 'insertChar',
        param: ','
    },
    'CARACTERE #': {
        action: 'insertChar',
        param: '#'
    },
    'CARACTERE SOMA': {
        action: 'insertChar',
        param: '+'
    },
    'CARACTERE.': {
        action: 'insertChar',
        param: '.' 
    },
    'CSS LISTA': {
        action: 'insertText',
        param: 'li'
    },
    'CSS A': {
        action: 'insertText',
        param: 'a'
    },
    'CSS NAV': {
        action: 'insertText',
        param: 'nav'
    },
    'CSS H3': {
        action: 'insertText',
        param: 'h3'
    },
    'CSS LISTA NÃO ORDENADA': {
        action: 'insertText',
        param: 'ul'
    },
    'ABRIR CHAVES': {
        action: 'openBraces',
        param: false
    },
    'VALOR NONE': {
        action: 'insertText',
        param: 'none'
    },
    'VALOR RGB': {
        action: 'insertText',
        param: 'rgba()'
    },
    'VALOR NÚMERO ZERO': {
        action: 'insertText',
        param: '0'
    },
    'VALOR NÚMERO 1': {
        action: 'insertText',
        param: '1'
    },
    'VALOR NÚMERO UM': {
        action: 'insertText',
        param: '1'
    },
    'VALOR NÚMERO 2': {
        action: 'insertText',
        param: '2'
    },
    'VALOR NÚMERO 3': {
        action: 'insertText',
        param: '3'
    },
    'VALOR NÚMERO 4': {
        action: 'insertText',
        param: '4'
    },
    'VALOR NÚMERO 5': {
        action: 'insertText',
        param: '5'
    },
    'VALOR NÚMERO 6': {
        action: 'insertText',
        param: '6'
    },
    'VALOR NÚMERO 7': {
        action: 'insertText',
        param: '7'
    },
    'VALOR NÚMERO 8': {
        action: 'insertText',
        param: '8'
    },
    'VALOR NÚMERO 9': {
        action: 'insertText',
        param: '9'
    },
    'VALOR LINEAR-GRADIENT': {
        action: 'insertText',
        param: 'linear-gradient()'
    },
    'VALOR EM GRAUS': {
        action: 'insertText',
        param: 'deg'
    },
    'COR BRANCA': {
        action: 'insertText',
        param: 'white'
    },
    'COR AZUL': {
        action: 'insertText',
        param: 'blue'
    },
    'COR AZUL CLARO': {
        action: 'insertText',
        param: 'lightblue'
    },
    'COR AMARELA': {
        action: 'insertText',
        param: 'yellow'
    },
    'COR TOMATE': {
        action: 'insertText',
        param: 'tomato'
    },
    'COR VERDE': {
        action: 'insertText',
        param: 'green'
    },
    'COR VERDE CLARO': {
        action: 'insertText',
        param: 'lightgreen'
    }

}
