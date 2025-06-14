function checkAnswer() {
    // Step 1: Declare the correct answer
    const correctAnswer = "4";

    // Step 2: Get the selected radio button with name="quiz"
    const selected = document.querySelector('input[name="quiz"]:checked');

    // Step 3: If no option is selected, do nothing or you can give feedback (optional)
    if (!selected) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    // Step 4: Get the user's selected answer value
    const userAnswer = selected.value;

    // Step 5: Compare userAnswer with correctAnswer and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
