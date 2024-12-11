import {subject} from '../Resources/questions/question.js'

$(document).ready(function () {
const params = new URLSearchParams(window.location.search);
const selectedSubject = params.get('data1'); 
const questionCount = parseInt(params.get('data2')); 

const subjects = JSON.parse(JSON.stringify(subject));

function generateRandomQuestions(subject, questionCount) {
    const subjectQuestions = Object.values(subject.questions);
    
    for (let i = subjectQuestions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [subjectQuestions[i], subjectQuestions[randomIndex]] = [subjectQuestions[randomIndex], subjectQuestions[i]];
    }

    return subjectQuestions.slice(0, questionCount);
}

function renderQuestions(selectedQuestions) {
    const form = document.createElement('form');
    form.id = 'quiz-form';

    selectedQuestions.forEach((questionObj, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question';

        const questionHolder = document.createElement('div');
        questionHolder.className = 'questionHolder';

        const questionText = document.createElement('p');
        questionText.className = 'theQuestion';
        questionText.innerText = `${index + 1}. ${questionObj.question}`;
        questionHolder.appendChild(questionText);

        questionContainer.appendChild(questionHolder);

        const answers = [questionObj.answer, ...questionObj.wrong_answers];
        for (let i = answers.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
        }

        answers.forEach((answer) => {
            const label = document.createElement('label');
            label.innerText = answer;
            label.style.display = 'block';

            const radio = document.createElement('input');
            radio.className = "radio"
            radio.type = 'radio';
            radio.name = `question-${index}`;
            radio.value = answer;

            label.prepend(radio);
            questionContainer.appendChild(label);
        });

        form.appendChild(questionContainer);
    });

    const submitButtonContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.style = '--clr:#39FF14';
    submitButton.innerHTML = '<span>Submit</span><i></i>';
    submitButtonContainer.appendChild(submitButton);

    form.appendChild(submitButtonContainer);

    document.body.appendChild(form);
}

let selectedQuestions = [];

if (subjects[selectedSubject]) {
    selectedQuestions = generateRandomQuestions(subjects[selectedSubject], questionCount);
    renderQuestions(selectedQuestions);
} else {
    alert('Invalid subject selected!');
}


document.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(document.getElementById('quiz-form'));
    const results = [];

    selectedQuestions.forEach((questionObj, index) => {
        const userAnswer = formData.get(`question-${index}`);
        const correctAnswer = questionObj.answer;
        results.push({
            question: questionObj.question,
            userAnswer,
            correct: userAnswer === correctAnswer
        });
    });

    console.log('Quiz Results:', results);
    alert('Quiz submitted! Check the console for results.');
});
})
