"use strict"

import Recognizer from './voice/Recognizer.js'
import Editor from './editor/Editor.js'
import CommandHandler from './handler/CommandHandler.js'
import Render from './render/Render.js'

const editor = new Editor()
const rec = new Recognizer()
const commandHandler = new CommandHandler(editor)
const render = new Render()

export function startVoiceRecognition(){
    console.log('START')
    rec.setEventListener(commandHandler)
    rec.startListening()
}

export function stopVoiceRecognition(){
    console.log('STOP')
    rec.stopListening()
}

export function renderContent(){
    const control = editor.getEditorControl()
    render.renderContent(control.getEditorContent())
    console.log('RENDER')
}
