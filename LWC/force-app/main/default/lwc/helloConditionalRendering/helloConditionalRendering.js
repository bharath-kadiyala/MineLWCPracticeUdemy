import { LightningElement, track } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    @track isVisible = {
        case: false
    }

    
    handleClick(){
        this.isVisible.case = !this.isVisible.case;
    }

    case2 = false
    showValue(event){
        if(event.key === "Enter" && event.target.value === "Hello"){
            return this.case2 = true
        }
    }


    //Falsy values are
    //x = false , null , undefined , 0 , NAN , "" 
}