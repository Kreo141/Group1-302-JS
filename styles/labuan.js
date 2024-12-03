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
        $(this).text(difficulty).css('background-color', color);
    });


    $('#questions').click(function() {
        currentQuestionIndex = (currentQuestionIndex + 1) % questionCounts.length;
        const questions = questionCounts[currentQuestionIndex];
        $(this).text(questions + ' Questions');
    });


    $('#start').click(function() {
        const selectedDifficulty = difficultyLevels[currentDifficultyIndex];
        const selectedQuestionCount = questionCounts[currentQuestionIndex];
        

        const result = [selectedDifficulty, selectedQuestionCount];
        
        console.log(result); 
        alert('Game Started with Difficulty: ' + selectedDifficulty + ' and Questions: ' + selectedQuestionCount);
    });

});