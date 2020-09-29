"use strict"

class Status {
    constructor(element){
        this.element = element
        this.default = 'STATUS: '
        this.initStatus()
    }

    initStatus(){
        document.querySelector(this.element).innerHTML = this.default
    }
    setDefault(message){
        this.default = message
        this.initStatus()
    }
    setStatus(message){
        document.querySelector(this.element).innerHTML = this.default + message
    }
    getStatus(){
        return document.querySelector(this.element).innerHTML
    }
}

export default Status