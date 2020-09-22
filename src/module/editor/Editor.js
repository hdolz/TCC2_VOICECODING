"use strict"

// import CodeMirror from '../dependencies/codemirror/src/codemirror.js'

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
        });
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
        // focusEditor()
        // setCursorPos(11,8)
        // insertTab()
    }

    handleRecon(recon){
        console.log('-> ', recon)
    }

}

export default Editor