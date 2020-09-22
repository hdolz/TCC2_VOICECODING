"use strict"

//web speech api native exports
const SpeechRecognition = webkitSpeechRecognition
const SpeechGrammarList = webkitSpeechGrammarList
const SpeechRecognitionEvent = webkitSpeechRecognitionEvent

class Recognizer {

    constructor(){
        console.log('Voice recognizer module instantiated')
        this.recognition = new SpeechRecognition()
        this.subcontextFlag = null
        this.initGrammar(this.recognition)
    }

    initGrammar(recognition){
        const speechRecognitionList = new SpeechGrammarList();
        //define as palavras a serem reconhecidas
        const palavras = ['Manaus', 'Escopo', 'Programa', 'html', 'black', 'blue', 'Bloco html', 'chocolate', 'coral', 'David'];
        const grammar = '#JSGF V1.0; grammar palavras; public <palavra> = ' + palavras.join(' | ') + ' ;'
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = true;
        recognition.lang = 'pt-br';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    }

    setEventListener(editor){
        console.log('Recognizer listening');
        this.recognition.onresult = (event)=>{
            const last = event.results.length - 1;
            const recon = event.results[last][0].transcript;
            editor.handleRecon(recon)
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