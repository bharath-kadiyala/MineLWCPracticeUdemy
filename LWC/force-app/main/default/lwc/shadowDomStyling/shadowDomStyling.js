import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return
        const styleEl = document.createElement('style')
        styleEl.innerHTML = `c-shadow-dom-styling .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(styleEl);
        this.isLoaded = true;
    }
}