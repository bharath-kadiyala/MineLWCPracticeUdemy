import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeModal(){
        let model = new CustomEvent('close',{
            bubbles : true,
            detail: 'Modal Closed Successfully.!',
            /*detail: {
                msg :  'Modal Closed Successfully.!'
            }*/
        })
        this.dispatchEvent(model);
    }

    footerHandler(){
        console.log('Footer handler is called');
    }
}