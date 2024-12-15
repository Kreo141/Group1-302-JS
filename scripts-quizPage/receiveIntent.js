// Importing necessary data
import { subject } from '../Resources/questions/question.js';

$(document).ready(function () {
    // Retrieve URL parameters
    const params = new URLSearchParams(window.location.search);
    const selectedSubject = params.get('data1');
    const questionCount = parseInt(params.get('data2'), 10);

    // Clone subject data to prevent mutation
    const subjects = JSON.parse(JSON.stringify(subject));

    /**
     * Generate a list of random questions
     * @param {Object} subjectData - Selected subject data
     * @param {number} questionCount - Number of questions to generate
     * @returns {Array} Array of random questions
     */
    function generateRandomQuestions(subjectData, questionCount) {
        const questions = Object.values(subjectData.questions);

        // Shuffle questions using Fisher-Yates algorithm
        for (let i = questions.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[randomIndex]] = [questions[randomIndex], questions[i]];
        }

        return questions.slice(0, questionCount);
    }

    /**
     * Render questions dynamically in the form
     * @param {Array} selectedQuestions - List of selected questions
     */
    function renderQuestions(selectedQuestions) {
        const form = document.createElement('form');
        form.id = 'quiz-form';

        selectedQuestions.forEach((questionObj, index) => {
            // Create question container
            const questionContainer = document.createElement('div');
            questionContainer.className = 'question';

            // Add question text
            const questionHolder = document.createElement('div');
            questionHolder.className = 'questionHolder';

            const questionText = document.createElement('p');
            questionText.className = 'theQuestion';
            questionText.innerText = `${index + 1}. ${questionObj.question}`;
            questionHolder.appendChild(questionText);

            questionContainer.appendChild(questionHolder);

            // Shuffle answers
            const answers = [questionObj.answer, ...questionObj.wrong_answers];
            for (let i = answers.length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
            }

            // Add answer options
            answers.forEach((answer) => {
                const label = document.createElement('label');
                label.innerText = answer;
                label.style.display = 'block';

                const radio = document.createElement('input');
                radio.className = 'radio';
                radio.type = 'radio';
                radio.name = `question-${index}`;
                radio.value = answer;

                label.prepend(radio);
                questionContainer.appendChild(label);
            });

            form.appendChild(questionContainer);
        });

        // Add submit button
        const submitButtonContainer = document.createElement('div');
        submitButtonContainer.id = 'submitButtonContainer';

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.style = '--clr:#39FF14';
        submitButton.innerHTML = '<span>Submit</span><i></i>';

        submitButtonContainer.appendChild(submitButton);
        form.appendChild(submitButtonContainer);

        document.body.appendChild(form);
    }

    // Initialize and render quiz
    let selectedQuestions = [];
    if (subjects[selectedSubject]) {
        selectedQuestions = generateRandomQuestions(subjects[selectedSubject], questionCount);
        renderQuestions(selectedQuestions);
    } else {
        alert('Invalid subject selected!');
    }

    // Handle form submission
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(document.getElementById('quiz-form'));
        const results = selectedQuestions.map((questionObj, index) => {
            const userAnswer = formData.get(`question-${index}`);
            return {
                question: questionObj.question,
                userAnswer,
                correctAnswer: questionObj.answer,
                correct: userAnswer === questionObj.answer,
            };
        });

        finishQuiz(results);

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    /**
     * Handle post-quiz logic
     * @param {Array} results - Quiz results
     */
    function finishQuiz(results) {
        loadResults(results);
        loadChart(results);
        loadScore(results);
        loadReturnButton();
        storeResults(results);
    }

    /**
     * Render quiz results
     * @param {Array} results - Quiz results
     */
    function loadResults(results) {
        const questionElements = document.querySelectorAll('.question');
        questionElements.forEach((element) => element.remove());
        $('#submitButtonContainer').remove();

        results.forEach((result) => {
            const resultContainer = document.createElement('div');
            resultContainer.id = result.correct ? 'correct' : 'wrong';

            const questionHolder = document.createElement('div');
            questionHolder.className = 'questionHolder';

            const questionText = document.createElement('p');
            questionText.className = 'theQuestion';
            questionText.innerText = result.question;

            const userAnswerText = document.createElement('p');
            userAnswerText.id = 'userAnswer';
            userAnswerText.innerText = `Your Answer: ${result.userAnswer || 'No Answer'}`;

            const correctAnswerText = document.createElement('p');
            correctAnswerText.id = 'correctAnswer';
            correctAnswerText.innerText = `Correct Answer: ${result.correctAnswer}`;

            questionHolder.appendChild(questionText);
            resultContainer.appendChild(questionHolder);
            resultContainer.appendChild(userAnswerText);
            resultContainer.appendChild(correctAnswerText);

            $('#quiz-form').append(resultContainer);
        });
    }

    /**
     * Render pie chart of results
     * @param {Array} results - Quiz results
     */
    function loadChart(results) {
        const correctCount = results.filter((result) => result.correct).length;
        const incorrectCount = results.length - correctCount;

        const data = {
            datasets: [
                {
                    data: [correctCount, incorrectCount],
                    backgroundColor: ['#39FF14', 'red'],
                    hoverOffset: 4,
                },
            ],
        };

        const chartContainer = document.createElement('div');
        chartContainer.id = 'chartContainer';
        document.getElementById('quiz-form').appendChild(chartContainer);

        const canvas = document.createElement('canvas');
        chartContainer.appendChild(canvas);

        new Chart(canvas, {
            type: 'pie',
            data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        });
    }

    /**
     * Display quiz score
     * @param {Array} results - Quiz results
     */
    function loadScore(results) {
        const correctCount = results.filter((result) => result.correct).length;

        const scoreElement = document.createElement('p');
        scoreElement.id = 'score';
        scoreElement.innerText = `Score: ${correctCount}/${results.length}`;

        document.getElementById('quiz-form').appendChild(scoreElement);
    }

    /**
     * Add a return button to the form
     */
    function loadReturnButton() {
        const returnButtonContainer = document.createElement('div');
        returnButtonContainer.id = 'submitButtonContainer';

        const returnButton = document.createElement('button');
        returnButton.type = 'button';
        returnButton.style = '--clr:#39FF14';
        returnButton.innerHTML = '<span>Return</span><i></i>';

        returnButton.addEventListener('click', () => {
            window.location.href = '../home.html';
        });

        returnButtonContainer.appendChild(returnButton);
        $('#quiz-form').append(returnButtonContainer);
    }

    /**
     * Store results in cookies
     * @param {Array} results - Quiz results
     */
    function storeResults(results) {
        const correctCount = results.filter((result) => result.correct).length;
        let cookieIndex = 1;

        while (document.cookie.includes(`correctCount${cookieIndex}=`)) {
            cookieIndex++;
        }

        document.cookie = `correctCount${cookieIndex}=${correctCount}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
});
