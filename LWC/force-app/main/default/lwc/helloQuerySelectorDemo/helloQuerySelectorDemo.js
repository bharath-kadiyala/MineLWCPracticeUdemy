import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    usersName = ["John","Smith","Nik","Mike"]
    fetchDetailsHandler(){
        let elem = this.template.querySelectorAll('h1');
        console.log(elem)
        elem.style.border = '1px solid red';
        let userElements = this.template.querySelectorAll('.name')
        console.log(userElements);
        Array.from(userElements).forEach(item => {
            item.setAttribute('title',item.innerText)
            console.log(item.innerText) 
        });

        //lwc:dom="manual" demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>Hey i am a child Element</p>';
    }
}