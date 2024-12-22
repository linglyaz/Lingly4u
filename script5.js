function toggleTranslation(translationId) {
    const translationElement = document.getElementById(translationId);
    
    // Check if the translation is currently visible
    if (translationElement.style.display === "none" || translationElement.style.display === "") {
        // Show the translation
        translationElement.style.display = "block";
    } else {
        // Hide the translation
        translationElement.style.display = "none";
    }
}

// Initial setup: Hide all translations
document.addEventListener("DOMContentLoaded", function() {
    const translations = document.querySelectorAll('.translation');
    translations.forEach(translation => {
        translation.style.display = "none";
    });
});
function checkTrueFalse() {
    const correctAnswers = [false, true, false, true, false, false];
    const userAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked'),
        document.querySelector('input[name="q6"]:checked')
    ];

    userAnswers.forEach((answer, index) => {
        const resultSpan = document.getElementById(`result${index + 1}`);
        if (answer) {
            if (answer.value === String(correctAnswers[index])) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = "Incorrect! The correct answer is: " + correctAnswers[index];
                resultSpan.className = "result incorrect";
            }
        } else {
            resultSpan.innerText = "Please select an answer.";
            resultSpan.className = "result incorrect";
        }
    });
}


    function checkTrueFalse() {
        // Correct answers for the questions
        const correctAnswers = {
            q1: "false", // The human population is increasing, not decreasing.
            q2: "true",  // Acid rain harms wildlife in lakes and forests.
            q3: "true",  // The ozone layer is recovering due to reduced CFCs.
            q4: "true",  // Global warming causes sea level rise.
            q5: "false", // Habitat destruction is influenced by human activities.
            q6: "true"   // Natural climate changes are easier for species to adapt to.
        };

        // Loop through the questions and check answers
        for (let i = 1; i <= 6; i++) {
            const questionName = `q${i}`;
            const userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            const resultSpan = document.getElementById(`result${i}`);

            if (!userAnswer) {
                // If no answer is selected
                resultSpan.textContent = "Please select an answer.";
                resultSpan.style.color = "red";
            } else if (userAnswer.value === correctAnswers[questionName]) {
                // If the answer is correct
                resultSpan.textContent = "Correct!";
                resultSpan.style.color = "green";
            } else {
                // If the answer is incorrect
                resultSpan.textContent = `Incorrect. The correct answer is "${correctAnswers[questionName].toUpperCase()}".`;
                resultSpan.style.color = "red";
            }
        }
    }


    function checkFillBlanks() {
        const correctAnswers = {
            fillBlank1: "ozone layer",
            fillBlank2: "sea levels",
            fillBlank3: "ecosystems",
            fillBlank4: "global warming",
            fillBlank5: "species",
            fillBlank6: "acid rain",
            fillBlank7: "glaciers"
        };

        for (const [key, correctAnswer] of Object.entries(correctAnswers)) {
            const userInput = document.getElementById(key).value.trim().toLowerCase();
            const resultSpan = document.getElementById(`fillResult${key.slice(-1)}`);
            const correctAnswerSpan = document.getElementById(`correctAnswer${key.slice(-1)}`);

            if (userInput === correctAnswer.toLowerCase()) {
                // If the answer is correct
                resultSpan.textContent = "Correct!";
                resultSpan.style.color = "green";
                correctAnswerSpan.textContent = ""; // Clear any previous correct answer display
            } else {
                // If the answer is incorrect
                resultSpan.textContent = "Incorrect.";
                resultSpan.style.color = "red";
                correctAnswerSpan.textContent = `Correct answer: ${correctAnswer}`;
                correctAnswerSpan.style.color = "blue";
            }
        }
    }

    function checkAnswersss() {
        // Define the correct answers
        const correctAnswers = {
            r1: "B", // ozone layer
            r2: "C", // glaciers
            r3: "D", // adapt
            r4: "C", // pollutant gases
            r5: "B", // acid rain
            r6: "A", // vehicle exhausts
            r7: "C"  // reduce
        };

        // Iterate over each question and check the answer
        for (let i = 1; i <= 7; i++) {
            const selectedOption = document.querySelector(`input[name="r${i}"]:checked`);
            const resultSpan = document.getElementById(`result1${i}`);
            const correctAnswer = correctAnswers[`r${i}`]; // Get correct answer for this question

            if (selectedOption) {
                // Check if the selected answer is correct
                if (selectedOption.value === correctAnswer) {
                    resultSpan.textContent = "Correct!";
                    resultSpan.style.color = "green";
                } else {
                    resultSpan.textContent = `Incorrect. The correct answer is: ${getAnswerText(correctAnswer)}`;
                    resultSpan.style.color = "red";
                }
            } else {
                resultSpan.textContent = "Please select an answer.";
                resultSpan.style.color = "red";
            }
        }
    }

    // Function to get the text of the correct answer based on the value
    function getAnswerText(answer) {
        const answerTexts = {
            "A": "acid rain",
            "B": "ozone layer",
            "C": "glaciers",
            "D": "adapt",
            "E": "pollutant gases",
            "F": "vehicle exhausts"
        };
        return answerTexts[answer] || "Unknown answer"; // Return the text corresponding to the answer value
    }




    
    function checkFillInBlankssss() {
        // Correct answers for the fill-in-the-blank sentences
        const correctAnswers = {
            answer1: "knew",
            answer1a: "would invite",
            answer2: "mix",
            answer2a: "get",
            answer3: "studied",
            answer3a: "would pass",
            answer4: "didn't make",
            answer4a: "would be",
            answer5: "hadn't rained",
            answer5a: "would have gone"
        };
    
        // Check each input field for the correct answer
        for (let i = 1; i <= 5; i++) {
            const userAnswer1 = document.getElementById(`answer${i}`).value.trim();
            const userAnswer2 = document.getElementById(`answer${i}a`).value.trim();
    
            const result = document.getElementById(`resultt${i}`);
    
            // Check if both parts of the answer are correct
            if (userAnswer1.toLowerCase() === correctAnswers[`answer${i}`].toLowerCase() &&
                userAnswer2.toLowerCase() === correctAnswers[`answer${i}a`].toLowerCase()) {
                result.textContent = "Correct!";
                result.style.color = "green";
            } else {
                result.textContent = `Incorrect. The correct answers are: '${correctAnswers[`answer${i}`]}' and '${correctAnswers[`answer${i}a`]}'`;
                result.style.color = "red";
            }
        }
    }

    
    function checkMultipleChoice() {
        // Correct answers for the multiple-choice questions
        const correctAnswers = {
            q6: "A", // The correct answer for question 6 is A
            q7: "A", // The correct answer for question 7 is A
            q8: "A", // The correct answer for question 8 is A
            q9: "B", // The correct answer for question 9 is B
            q10: "A" // The correct answer for question 10 is A
        };
    
        // Check each question's answer
        for (let i = 6; i <= 10; i++) {
            const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    
            const result = document.getElementById(`resultp${i - 5}`); // This matches resultp1, resultp2, etc.
    
            if (userAnswer) {
                // Check if the selected answer is correct
                if (userAnswer.value === correctAnswers[`q${i}`]) {
                    result.textContent = "Correct!";
                    result.style.color = "green";
                } else {
                    result.textContent = `Incorrect. The correct answer is: ${correctAnswers[`q${i}`]}`;
                    result.style.color = "red";
                }
            } else {
                result.textContent = "Please select an answer.";
                result.style.color = "red";
            }
        }
    }
    
    function checkMultipleChoiceeees() {
        // Correct answers for the multiple-choice questions
        const correctAnswers = {
            q1: "b", // The correct answer for question 1 is B
            q2: "b", // The correct answer for question 2 is B
            q3: "b", // The correct answer for question 3 is B
            q4: "b", // The correct answer for question 4 is B
            q5: "b"  // The correct answer for question 5 is B
        };
    
        // Check each question's answer
        for (let i = 1; i <= 5; i++) {
            const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            const result = document.getElementById(`resulty${i}`);
    
            if (userAnswer) {
                // Check if the selected answer is correct
                if (userAnswer.value === correctAnswers[`q${i}`]) {
                    result.textContent = "Correct!";
                    result.style.color = "green";
                } else {
                    result.textContent = `Incorrect. The correct answer is: ${correctAnswers[`q${i}`]}`;
                    result.style.color = "red";
                }
            } else {
                result.textContent = "Please select an answer.";
                result.style.color = "red";
            }
        }
    }
    
    function checkTrueFalseeeee() {
        // Correct answers for the True/False questions
        const correctAnswers = {
            q6: "false", // Global warming is not caused by water vapour alone
            q7: "true",  // Rising temperatures could cause sea levels to rise
            q8: "false", // Acid rain does not help the growth of forests and plants
            q9: "true",  // CFCs are responsible for destroying the ozone layer
            q10: "true"  // The "holes" in the ozone layer allow harmful rays to reach the Earth
        };
    
        // Check each question's answer
        for (let i = 6; i <= 10; i++) {
            const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            const result = document.getElementById(`resultn${i-5}`);
    
            if (userAnswer) {
                // Check if the selected answer is correct
                if (userAnswer.value === correctAnswers[`q${i}`]) {
                    result.textContent = "Correct!";
                    result.style.color = "green";
                } else {
                    result.textContent = `Incorrect. The correct answer is: ${correctAnswers[`q${i}`]}`;
                    result.style.color = "red";
                }
            } else {
                result.textContent = "Please select an answer.";
                result.style.color = "red";
            }
        }
    }
    