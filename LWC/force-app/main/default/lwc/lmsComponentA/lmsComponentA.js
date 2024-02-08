import { LightningElement,wire } from 'lwc';
import SAMPLELMS from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    value;
    @wire(MessageContext) context;

    inputHandler(event){
        this.value = event.target.value;
    }

    message = {
        lmsData:{
            data: this.value,
        }
    }
    publishHandler(){
        publish(this.context,SAMPLELMS,message);
    }
}