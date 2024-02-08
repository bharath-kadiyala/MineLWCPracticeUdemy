import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetails
    @api
    get details(){
        return this.userDetails;
    }

    set details(data){
        let newAge = data.age + 2;
        this.userDetails = {
            ...data,
            age : newAge,
            location : 'Rajahmundry', 
            Designation : 'Founder & CEO of Opra.Inc',
            netWorth : '10000000000 CR'
        }; 
    }
}