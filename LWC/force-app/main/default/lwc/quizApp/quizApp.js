import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} // for store answers
    correctAnswers = 0 //to show the result
    isSubmitted = false //to change the color based on the correct answers

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    //For applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    myQuestions = [
        {
            id:"Question1",
            question: "Which one of the following is not a template loop?",
            answer:{
                a:"for:each",
                b:'Iterator',
                c:'map loop'
            },
            correctAnswer:'c'
        },
        {
            id:"Question2",
            question: "Which of the file is invaild in LWC component folder?",
            answer:{
                a:".svg",
                b:'.apex',
                c:'.js'
            },
            correctAnswer:'b'
        },
        {
            id:"Question3",
            question: "Which of the following is not a directives?",
            answer:{
                a:"for:each",
                b:'if:true',
                c:'@track'
            },
            correctAnswer:'c'
        }
    ]

    //Change Handler get's called on every click on the option
    changeHandler(event){
        // console.log('name', event.target.name);
        // console.log('value',event.target.value);
        const{name,value} = event.target
        this.selected = {...this.selected,[name]:value}
        //console.log('this.selected ------',JSON.stringify(this.selected))
    }

    //Submit Handler
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer) //In the name attribute we are passing the id of the question. Thats why we are using the item.id
        console.log('correct ------',JSON.stringify(correct))
        //let correct = this.myQuestions.filter(item => this.selected[item.value] === item.correctAnswer)
        this.correctAnswers = correct.length;
        this.isSubmitted = true
        //console.log('Correct Ans ', this.correctAnswers )
    }

    //reset Handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}