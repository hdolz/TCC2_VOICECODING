"use strict"

import Recognizer from './voice/Recognizer.js'
import Editor from './editor/Editor.js'

const editor = new Editor()
const rec = new Recognizer()

export function startVoiceRecognition(){
    console.log('START')
    rec.setEventListener(editor)
    rec.startListening(editor)
}

export function stopVoiceRecognition(){
    console.log('STOP')
    rec.stopListening()
}

export function renderContent(){
    console.log('RENDER')
}
