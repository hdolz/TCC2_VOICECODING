"use strict"

import EditorControls from './EditorControls.js'

class Editor {

    constructor(){
        this.editor = this.configureEditor()

        this.control = new EditorControls(this.editor)
        // this.control.triggerControl('initEditor')
    }

    configureEditor(){
        const editor = CodeMirror.fromTextArea(document.querySelector("#editor"), {
            lineNumbers: true,
            autoCloseTags: true,
            gutter: true,
            lineWrapping: true,
            autoFocus: true,
            indentUnit: 4,
            theme: "dracula",
            mode: "xml"
        })
        editor.setSize('100%','100%')
        return editor
    }

    getEditorControl(){
        return this.control
    }

    triggerAction(action, param=null){
        return this.control.triggerControl(action, param)
    }

}

export default Editor