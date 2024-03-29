import { LightningElement,track } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    percentValue = 10;
    carouselData = [
        {   
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
        },
        {   
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description."
        },        
        {   
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description."
        }
    ]


    handleChange(event){
        this.percentValue = event.target.value;
    }

    handleClick(){
        this.template.querySelector('c-P2c-slider-component').renderDefault();
    }

}
