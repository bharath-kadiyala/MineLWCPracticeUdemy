import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    message
    isVisible = false;
    changeHandler(event){
        this.isVisible = true;
    }

    handleClose(event){
        this.message = event.detail;
        //this.message = event.detail.msg;
        this.isVisible = false;
    }

}