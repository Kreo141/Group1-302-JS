$(document).ready(function() {
    // Define the difficulty levels and colors
    const difficultyLevels = ['Easy', 'Medium', 'Hard'];
    const difficultyColors = ['green', 'yellow', 'red'];

    let currentDifficultyIndex = 0;

    // Define the question counts
    const questionCounts = [3, 5, 7, 10];
    let currentQuestionIndex = 0;

    // Handle clicks on the Difficulty button
    $('#difficulty').click(function() {
        // Cycle through difficulty levels
        currentDifficultyIndex = (currentDifficultyIndex + 1) % difficultyLevels.length;
        const difficulty = difficultyLevels[currentDifficultyIndex];
        const color = difficultyColors[currentDifficultyIndex];

        // Update the text and color of the Difficulty button
        $(this).text(difficulty).css('background-color', color);
    });

    // Handle clicks on the Questions button
    $('#questionCount').click(function() {
        // Cycle through question counts
        currentQuestionIndex = (currentQuestionIndex + 1) % questionCounts.length;
        const questions = questionCounts[currentQuestionIndex];

        // Update the text of the Questions button
        $(this).text(questions + ' QUESTIONS');
    });

    // Start button remains unaffected and can be used as needed
    $('#start').click(function() {
        alert('Game Started!');
    });
});
