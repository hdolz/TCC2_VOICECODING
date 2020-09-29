"use strict"

import Recognizer from './voice/Recognizer.js'
import Editor from './editor/Editor.js'
import CommandHandler from './handler/CommandHandler.js'
import Render from './render/Render.js'
import Status from './status/Status.js'

const status = new Status('.status')
const editor = new Editor()
const rec = new Recognizer()
const commandHandler = new CommandHandler(editor, status)
const render = new Render()

export function startVoiceRecognition(){
    console.log('START')
    rec.setEventListener(commandHandler)
    rec.startListening()
    status.setDefault('STATUS: 🔊 Escutando: ')
}

export function stopVoiceRecognition(){
    console.log('STOP')
    rec.stopListening()
    status.setDefault('STATUS: ')
    status.setStatus('🔇 Reconhecimento de voz finalizado')
    setTimeout(()=>{
        status.setStatus('')
    }, 2500)
}

export function renderContent(){
    const control = editor.getEditorControl()
    render.renderContent(control.getEditorContent())
    status.setStatus('Conteúdo renderizado')
    setTimeout(()=>{
        status.setStatus('')
    }, 2000)
    console.log('RENDER')
}
