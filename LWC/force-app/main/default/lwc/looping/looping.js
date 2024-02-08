import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ['Ford','Audi','Maruti','TATA','Hundai',"Mercedes"];

    ceoList = [
        {
            id:1,
            company : "Google",
            name: 'Sunda Pichai'
        },
        {
            id:2,
            company : "Apple Inc.",
            name : 'Tim Cook'
        },
        {
            id:3,
            company : "Microsoft",
            name : 'Satyam Nadendla'
        },
        {
            id:4,
            company : "Amazon.com",
            name : 'Jeff Bezos'
        }
    ]
}