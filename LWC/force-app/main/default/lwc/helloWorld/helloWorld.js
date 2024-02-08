import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /**Data Binding example */
    fullName = 'Zero to Hero'
    title = 'Aura'
    changehandler(event){
        this.title = event.target.value;
    }


    /**@track binding example */
    @track address = {
        City: 'Rajahmundry',
        PostCode: 533103,
        Country:"India"
    }

    trackhandler(event){
        //this.address ={...this.address , City: event.target.value} ;
        this.address.City = event.target.value
    }


    /**Getter example */
    users = ["John","Smith","Nik"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0];
    }

    get multiplication(){
        return this.num1 * this.num2;
    }


}