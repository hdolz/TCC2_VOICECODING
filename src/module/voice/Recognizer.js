"use strict"

//web speech api native exports
const SpeechRecognition = webkitSpeechRecognition
const SpeechGrammarList = webkitSpeechGrammarList

class Recognizer {

    constructor(){
        console.log('Voice recognizer module instantiated')
        this.recognition = new SpeechRecognition()
        this.subcontextFlag = null
        this.initGrammar(this.recognition)
    }

    initGrammar(recognition){
        const speechRecognitionList = new SpeechGrammarList();
        recognition.grammars = speechRecognitionList;
        recognition.continuous = true;
        recognition.lang = 'pt-br';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    }

    setEventListener(handler){
        this.recognition.onresult = (event)=>{
            const last = event.results.length - 1;
            const recon = event.results[last][0].transcript;
            handler.handleRecon(recon.toUpperCase().trim())
        }
    }

    startListening(){
        this.recognition.start()
    }

    stopListening(){
        this.recognition.stop()
    }

}

export default Recognizer