"use strict"

class Editor {

    constructor(){
        this.editor = this.configureEditor()
        this.initEditor(this.editor)
    }

    configureEditor(){
        const editor = CodeMirror.fromTextArea(document.querySelector("#editor"), {
            lineNumbers: true,
            autoCloseTags: true,
            gutter: true,
            lineWrapping: true,
            autoFocus: true,
            indentUnit: 4,
            //essa variavel serve para definir valores iniciais da aplicação
            //value: startingValue,
            theme: "dracula",
            mode: "xml"
        })
        return editor
    }

    initEditor(editor){
        editor.setValue(
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
        editor.setSize('100%','100%')
        this.focusEditor()
        this.setCursorPos(11,8)
        this.insertTab()
    }

    handleRecon(recon){
        console.log('-> ', recon)
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
        const pos = getCursorPos()
        this.editor.replaceRange(string, pos)
    }
    
    getCursorLinePos(){
        const pos = this.editor.getCursor()
        return pos.line+1
    }
    
    getCursorColunmPos(){
        const pos = this.editor.getCursor()
        return pos.ch
    }
    
    getCursorPos() {
        return this.editor.getCursor()
    }
    
    setCursorPos(line, colunm){
        this.editor.setCursor(line-1, colunm)
    }
    
    getCursorLineContent(){
        const line = getCursorLinePos()
        return this.editor.getLine(line-1)
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
    
    gotoLine(){
        setCursorPos(10, 0)
    }
    
    getEditorContent(){
        return this.editor.getValue()
    }
    
    setEditorContent(string){
        this.editor.setValue(string)  
    }
    
    clearEditor(){
        this.editor.setValue("")
    }
    
    undoChange(){
        this.editor.undo()
    }
    
    redoChange(){
        this.editor.redo()
    }
    
    clearUndoHistory(){
        this.editor.clearHistory()
    }
    
    scrollEditorBottom(){
        //go to last line
        const lineCount = this.getEditorlineCount() 
        this.editor.scrollIntoView(lineCount-1)
    }
    
    scrollEditorUp(){
        //scroll to first line
        this.editor.scrollIntoView(0)
    }
    
    scrollInfo(){
        return this.editor.getScrollInfo()
    }
    
    hasFocus(){
        return this.editor.hasFocus()
    }
    
    focusEditor(){
        this.editor.focus()
    }
    
    getEditorlineCount(){
        return this.editor.lineCount()
    }

}

export default Editor