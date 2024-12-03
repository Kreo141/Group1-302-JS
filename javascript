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

        // Update the text, background color, text color, and value of the Difficulty button
        $(this)
            .text(difficulty)
            .val(difficulty) // Update the value
            .css({
                'background-color': color,
                'color': difficulty === 'Medium' ? 'black' : 'white'
            });
    });

    // Handle clicks on the Questions button
    $('#questionCount').click(function() {
        // Cycle through question counts
        currentQuestionIndex = (currentQuestionIndex + 1) % questionCounts.length;
        const questions = questionCounts[currentQuestionIndex];

        // Update the text and value of the Questions button
        $(this)
            .text(questions + ' QUESTIONS')
            .val(questions); // Update the value
    });

    // Start button remains unaffected and can be used as needed
    $('#start').click(function() {
        alert('Game Started!');
    });
});
