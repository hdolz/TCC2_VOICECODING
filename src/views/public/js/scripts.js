//This file contains all the page scripts, like button event click and so on
"use strict"

import {startVoiceRecognition as start} from '../../../module/entrypoint.js'
import {stopVoiceRecognition as stop} from '../../../module/entrypoint.js'
import {renderContent as render} from '../../../module/entrypoint.js'

class Scripts {

    setRecordButtonListener(){
        document.querySelector("#btnRecord").addEventListener("click", ()=>{
            start()
        })
    }

    setStopButtonListener(){
        document.querySelector("#btnStop").addEventListener("click", ()=>{
            stop()
        })
    }

    setRenderButtonListener(){
        document.querySelector("#btnRender").addEventListener("click", ()=>{
            render()
        })
    }

}

function init(){
    console.log('Scripts initialized')
    const scripts = new Scripts()
    scripts.setRecordButtonListener()
    scripts.setStopButtonListener()
    scripts.setRenderButtonListener()
}

init()
