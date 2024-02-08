import { LightningElement,wire } from 'lwc';
import SAMPLELMS from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe,unsubscribe,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    msg;
    @wire(MessageContext) msgContext;


    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
         //subscribe(messageContext,messageChannel,listner,subscriberOptions);
        subscribe(this.msgContext,SAMPLELMS,(message) => this.handleMessage(message),{scope:APPLICATION_SCOPE})
        //this.context is the context of the current lightning web component using LMS
        //SAMPLELMS is the reference of the message channel
        //listner is a function to receive message on a message channel from anywhere in the application
        //pass the subscriberOption parameter as {scope: APPLICATION_SCOPE}
    }

    handleMessage(message){
        this.msg = message.lmsData.data ? message.lmsData.data : 'No data was passed to this component';
    }

    unsubHandler(){
        unsubscribe(this.subscribeMessage)
            this.subscription = null;
    }
    
}