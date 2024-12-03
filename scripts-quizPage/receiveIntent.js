import {subject} from '../Resources/questions/question.js'

$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const data1 = params.get('data1');
    const data2 = params.get('data2');
    const data3 = params.get('data3');

    console.log("Data 1:", data1);
    console.log("Data 2:", data2);
    console.log("Data 3:", data3);

    console.log(subject.science.questions.question1.wrong_answers[1])

    function loadQuestions(){
        console.log(subject.science.questions.question1.question)
    }

})

