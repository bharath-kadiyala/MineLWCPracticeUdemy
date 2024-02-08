import { LightningElement } from 'lwc';
import renderTemplate from './renderMethod.html';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import loginTemplate from './loginPage.html';

export default class RenderMethod extends LightningElement {
    selectedBtn = '';
    render() {
        return this.selectedBtn === 'Signin' ? signinTemplate:
               this.selectedBtn === 'Signup' ? signupTemplate: 
                renderTemplate;
    }

    handleClick(event){
        this.selectedBtn = event.target.label;
    }

    submitHandle(){
        return loginTemplate;
    }
    
}
