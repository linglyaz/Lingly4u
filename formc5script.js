function checkAnswers() {
    const correctAnswers = ['B', 'C', 'D', 'C', 'B', 'A', 'C'];
    const correctAnswerTexts = [
        "Correct answer: B) ozone layer",
        "Correct answer: C) glaciers",
        "Correct answer: D) adapt",
        "Correct answer: C) pollutant gases",
        "Correct answer: B) acid rain",
        "Correct answer: A) vehicle exhausts",
        "Correct answer: C) reduce"
    ];

    for (let i = 1; i <= correctAnswers.length; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const resultSpan = document.getElementById(`result${i}`);
        
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[i - 1]) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = correctAnswerTexts[i - 1]; // Show correct answer
                resultSpan.className = "result incorrect";
            }
        } else {
            resultSpan.innerText = "Please select an answer.";
            resultSpan.className = "result incorrect";
        }
    }
}