"use strict"

import {htmlElements as htmlElements} from '../utils/elementmapping.js'
import {htmlAttributes as htmlAttributes} from '../utils/elementmapping.js'
import {attributeNames as attributeNames} from '../utils/elementmapping.js'
import {cssAttributes as cssAttributes} from '../utils/elementmapping.js'
import {specialChar as specialChar} from '../utils/elementmapping.js'

import Render from '../render/Render.js'

class EditorControls {

    constructor(editor){
        this.editor = editor
    }

    triggerControl(action, param=null){
        return this[action](param)
    }

    //Functions for manipulating the editor actions
    initEditor(){
        this.editor.setValue(
            '<!DOCTYPE html>' +'\n'+
            '<html lang="pt-br">'+'\n'+
            '<head>'+'\n'+
                '<meta charset="UTF-8">'+'\n'+
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+'\n'+
                '<title>Template</title>'+'\n'+
                '<link rel="stylesheet" href="static/css/layout.css">'+'\n'+
            '</head>'+'\n'+
            '<body>'+'\n'+
            '    <h1>Hello, world!</h1>'+'\n'+
            '<h1></h1>'+'\n'+
            ' '+'\n'+
            '</body>'+'\n'+
            '</html>'+'\n'
        )
        this.editor.setSize('100%','100%')
        this.focusEditor()
        this.setCursorPos(11,8)
        this.insertTab()
    }

    clearEditor(){
        this.editor.setValue("")
    }

    removeNextWord(){
        this.editor.execCommand('delWordAfter')
    }

    removePreviousWord(){
        this.editor.execCommand('delWordBefore')
    }

    removePreviousChar(){
        this.editor.execCommand('delCharBefore')
    }

    removeNextChar(){
        this.editor.execCommand('delCharAfter')
    } 

    nextCharacter(){
        this.editor.execCommand('goColumnRight')
    }

    previousCharacter(){
        this.editor.execCommand('goColumnLeft')
    }

    nextWord(){
        this.editor.execCommand('goWordRight')
    }

    previousWord(){
        this.editor.execCommand('goWordLeft')
    }

    newLine(){
        this.editor.execCommand('newlineAndIndent')
    }

    insertTab(){
        this.editor.execCommand('indentMore')
    }

    removeTab(){
        this.editor.execCommand('indentLess')
    }

    deleteLine(){
        this.editor.execCommand('deleteLine')
    }

    insertText(string){
        const pos = this.getCursorPos()
        this.editor.replaceRange(string, pos)
    }

    getCursorLinePos(){
        const pos = this.editor.getCursor();
        return pos.line+1;
    }

    getCursorColunmPos(){
        const pos = this.editor.getCursor();
        return pos.ch;
    }

    getCursorPos() {
        return this.editor.getCursor();
    }

    setCursorPos(line, colunm){
        this.editor.setCursor(line-1, colunm);
    }

    getCursorLineContent(){
        const line = this.getCursorLinePos();
        return this.editor.getLine(line-1);
    }

    cursorUp(){
        this.editor.execCommand('goLineUp')
    } 

    cursorDown(){
        this.editor.execCommand('goLineDown')
    }

    cursorToBeginLine(){
        this.editor.execCommand('goLineStart')
    }

    cursorToEndLine(){
        this.editor.execCommand('goLineEnd')
    }

    getEditorContent(){
        return this.editor.getValue();
    }

    setEditorContent(string){
        this.editor.setValue(string);  
    }

    clearEditor(){
        this.editor.setValue("");
    }

    undoChange(){
        this.editor.undo();
    }

    redoChange(){
        this.editor.redo();
    }

    clearUndoHistory(){
        this.editor.clearHistory();
    }

    scrollEditorBottom(){
        //go to last line
        const lineCount = this.getEditorlineCount(); 
        this.editor.scrollIntoView(lineCount-1);
    }

    scrollEditorUp(){
        //scroll to first line
        this.editor.scrollIntoView(0);
    }

    scrollInfo(){
        return this.editor.getScrollInfo();
    }

    hasFocus(){
        return this.editor.hasFocus();
    }

    focusEditor(){
        this.editor.focus();
    }

    getEditorlineCount(){
        return this.editor.lineCount();
    }

    setCursorForInsertingValue(){
        const pos = this.getCursorPos()
        const line = this.getCursorLineContent()
        const index = line.indexOf('>')
        this.setCursorPos(pos.line+1, index+1)
    }

    insertValueToElement(value){
        if(value === 'FINALIZAR VALOR'){
            return true
        }
        const pos = this.getCursorPos()
        this.insertText(value.toLowerCase()+' ', pos)
    }

    irParaLinha(recon){
        let reconArray = recon.split(" ")
        let linha = reconArray.reverse()[0]
        this.setCursorPos(linha, 0)
    }

    setCursorForInsertingAttribute(){
        const pos = this.getCursorPos()
        const line = this.getCursorLineContent()
        const index = line.indexOf('>')
        this.setCursorPos(pos.line+1, index)
        this.insertText(' ', pos)
    }

    insertAttributeToElement(attr){
        console.log('attr para inserir: '+attr)
        const attribute = htmlAttributes[attr]
        console.log('ATTRIBUTE: '+attribute)
        if(attribute === undefined){
            return false
        }
        const pos = this.getCursorPos()
        this.insertText(attribute, pos)
        return true
    }

    setAttributeValuePos(param){
        const attribute = attributeNames[param]
        if(attribute === undefined){
            return false
        }
        const line = this.getCursorLineContent()
        const hasPiece = line.indexOf(attribute)
        if(hasPiece){
            const pos = this.getCursorPos()
            console.log("POSICAO: "+ hasPiece)
            //esse 2 é =" do attributo
            this.setCursorPos(pos.line+1, hasPiece+ attribute.length + 2)
        }
    }

    insertAttributeValue(param){
        const pos = this.getCursorPos()
        this.insertText(param.toLowerCase(), pos)
    }

    addElement(element){
        const elemento = htmlElements[element]
        const pos = this.getCursorPos()
        this.insertText(elemento, pos)
    }

    addCssAttribute(attribute){
        const attr = cssAttributes[attribute]
        const pos = this.getCursorPos()
        this.insertText(attr, pos)
        this.previousCharacter()
    }

    expandElement(){
        const line = this.getCursorLineContent()
        console.log(line)
        console.log(line.length);
        this.cursorToBeginLine()
        this.nextWord()
        this.nextCharacter()
        this.newLine()
        this.newLine()
        const pos = this.getCursorPos()
        console.log('pos: ',pos)
        this.setCursorPos(pos.line, pos.ch)
        this.insertTab()
    }

    insertCssClass(recon){
        const pos = this.getCursorPos()
        const cssClass = `.${recon} {}`
        this.insertText(cssClass.toLowerCase())
        this.previousCharacter()
        this.newLine()
        this.newLine()
    }

    inserirTexto(recon){
        let reconArray = recon.toLowerCase().split(" ")
        console.log('Array que chega: ',reconArray);
        reconArray.splice(0,2)
        console.log('reconArray: ',reconArray);
        const text = reconArray.join(" ")
        this.insertText(text)
    }

    renderContent(){
        const render = new Render()
        render.renderContent(this.getEditorContent())
    }

    inserirValorJSVoid(){
        const jsvoid = "javascript:void(0)"
        this.insertText(jsvoid)
    }

    loremIpsun(){
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        this.insertText(lorem)
    }

    addEspacoBranco(){
        this.insertText(" ")
    }

    insertChar(param){
        const pos = this.getCursorPos()
        const char = specialChar[param]
        this.insertText(char)
    }

    openBraces(){
        const pos = this.getCursorPos()
        const braces = "{}"
        this.insertText(braces)
        this.previousCharacter()
        this.newLine()
        this.newLine()
        this.cursorUp()
        this.insertTab()
    }

    insertHexadecimalValue(value){
        const pos = this.getCursorPos()
        let hexa = `#${value.split(' ').join('')}`
        this.insertText(hexa, pos)
        console.log(value)
    }

    

}

export default EditorControls