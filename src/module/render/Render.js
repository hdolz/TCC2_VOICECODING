"use strict"

class Render {

    renderContent(editorContent){
        if(document.querySelector('#renderSpot')) document.querySelector('#renderSpot').remove();
        let iframe = document.createElement('iframe');
        iframe.setAttribute('id','renderSpot')
        let ctnr = document.querySelector('.renderArea');
        let content = editorContent
        ctnr.appendChild(iframe);
        iframe.contentWindow.document.open('text/htmlreplace');
        iframe.contentWindow.document.write(content);
        iframe.contentWindow.document.close();
    }
}

export default Render