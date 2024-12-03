$(document).ready(function() {
    const difficultyLevels = ['Easy', 'Medium', 'Hard'];
    const difficultyColors = ['green', 'yellow', 'red'];

    let currentDifficultyIndex = 0;

    const questionCounts = [3, 5, 7, 10];
    let currentQuestionIndex = 0;

    $('#difficulty').click(function() {
        currentDifficultyIndex = (currentDifficultyIndex + 1) % difficultyLevels.length;
        const difficulty = difficultyLevels[currentDifficultyIndex];
        const color = difficultyColors[currentDifficultyIndex];

        $(this)
            .text(difficulty)
            .val(difficulty)
            .css({
                'background-color': color,
                'color': difficulty === 'Medium' ? 'black' : 'white'
            });
    });

    $('#questionCount').click(function() {
        currentQuestionIndex = (currentQuestionIndex + 1) % questionCounts.length;
        const questions = questionCounts[currentQuestionIndex];

        $(this)
            .text(questions + ' QUESTIONS')
            .val(questions);
    });

    $('#start').click(function() {
        alert('Game Started!');
    });
});
