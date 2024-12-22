document.addEventListener("DOMContentLoaded", () => {
    const definitions = document.querySelectorAll(".definitions li");
    
    definitions.forEach(def => {
        def.addEventListener("dragover", allowDrop);
        def.addEventListener("drop", drop);
    });
});

let currentDrag = null;

// Function to handle the drag event
function drag(event) {
    currentDrag = event.target;
    event.dataTransfer.effectAllowed = 'move';
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function checkMatches() {
    const matches = {
        'liberty': 'def-b',
        'independence': 'def-d',
        'symbol': 'def-a',
        'victory': 'def-c'
    };
    
    let feedback = '';
    for (let word in matches) {
        const wordElement = document.getElementById(word);
        const targetDef = wordElement.parentNode.id;
        if (targetDef === matches[word]) {
            feedback += `${word} is correct.<br>`;
        } else {
            feedback += `${word} is incorrect.<br>`;
        }
    }
    document.getElementById("matchFeedback").innerHTML = feedback;
}
function submitAnswers() {
    const correctAnswers = {
        statement1: 'false',
        statement2: 'false',
        statement3: 'true',
        statement4: 'false',
        statement5: 'false'
    };

    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.querySelector(`input[name="statement${i}"]:checked`);
        const feedbackElement = document.getElementById(`answer${i}`);

        if (userAnswer && userAnswer.value === correctAnswers[`statement${i}`]) {
            feedbackElement.innerHTML = "Correct";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.innerHTML = "Incorrect";
            feedbackElement.style.color = "red";
        }
    }
}

  
    
function checkAnswers11() {
    const answers = {
        blank1: "taste",
        blank2: "touch",
        blank3: "hearing",
        blank4: "hunger",
        blank5: "sight",
        blank6: "balance"
    };
    
    let score = 0;

    // Check each blank's input
    for (let id in answers) {
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = answers[id];
        const inputElement = document.getElementById(id);

        // Check if the user's answer is correct
        if (userAnswer === correctAnswer) {
            inputElement.style.backgroundColor = "lightgreen";  // Correct answer
            score++;
        } else {
            inputElement.style.backgroundColor = "lightcoral";  // Incorrect answer
        }
    }

    // Display the result
    const result = document.getElementById('result');
    result.textContent = `You got ${score} out of 6 correct!`;
}
    function submitExercise15() {
        // Correct answers for each question
        const correctAnswers = {
            q1: "at",
            q2: "on",
            q3: "by",
            q4: "in",
            q5: "between"
        };

        // Loop through each question and check the answer
        let score = 0;
        for (let i = 1; i <= 5; i++) {
            const userAnswer = document.getElementById("q" + i).value.trim().toLowerCase();
            const questionInput = document.getElementById("q" + i);

            // Check if the answer is correct
            if (userAnswer === correctAnswers["q" + i]) {
                questionInput.classList.add("correct");
                questionInput.classList.remove("incorrect");
                score++;
            } else {
                questionInput.classList.add("incorrect");
                questionInput.classList.remove("correct");
            }
        }

        // Display result
        const resultMessage = `You got ${score} out of 5 correct.`;
        const resultDiv = document.getElementById("result9");
        resultDiv.textContent = resultMessage;
    }

        // Prepositions exercise script
        function checkPrepositions() {
            const correctAnswers = {
                p1: "through",
                p2: "upon",
                p3: "into",
                p4: "by",
                p5: "in",
                p6: "along",
                p7: "from",
                p8: "behind"
            };

            let correctCount = 0;
            const totalQuestions = Object.keys(correctAnswers).length;

            // Loop through each question to check answers
            for (const [key, value] of Object.entries(correctAnswers)) {
                const userInput = document.getElementById(key).value.trim().toLowerCase();
                const inputField = document.getElementById(key);

                if (userInput === value) {
                    inputField.classList.add("correct");
                    inputField.classList.remove("incorrect");
                    correctCount++;
                } else {
                    inputField.classList.add("incorrect");
                    inputField.classList.remove("correct");
                }
            }

            // Display result feedback
            const feedbackElement = document.getElementById("result-feedback");
            if (correctCount === totalQuestions) {
                feedbackElement.textContent = `Great job! You answered all ${totalQuestions} questions correctly!`;
                feedbackElement.style.color = "#155724";
            } else {
                feedbackElement.textContent = `You got ${correctCount} out of ${totalQuestions} correct. Try again!`;
                feedbackElement.style.color = "#721c24";
            }
        }


        function checkListeningAnswers() {
            const correctAnswers = {
                answerr1: "John Adams was one of the Founding Fathers of the United States. He played a crucial role in drafting the Declaration of Independence and believed that Independence Day should be celebrated with pomp and parade.",
                answerr2: "The Liberty Bell is considered a symbol of America's struggle for freedom because it was rung to mark the signing of the Declaration of Independence, signaling the birth of the new nation."
            };
        
            let feedback = "";
        
            // Check comprehension answers
            for (const [key, value] of Object.entries(correctAnswers)) {
                const userAnswer = document.getElementById(key).value.trim().toLowerCase();
                const normalizedCorrectAnswer = value.toLowerCase();
        
                if (userAnswer === normalizedCorrectAnswer) {
                    feedback += `<p style="color: green;">Your answer for <b>${key}</b> is correct!</p>`;
                } else {
                    feedback += `<p style="color: red;">Your answer for <b>${key}</b> is incorrect. The correct answer is: "${value}".</p>`;
                }
            }
        
            // Update result div
            document.getElementById("listeningResult").innerHTML = feedback;
    
            // Update result for comprehension questions
            document.getElementById("listeningResult").innerHTML = feedback;
        }
    
        function checkGapFill() {
            const correctAnswer = "Liberty, people";
            const userAnswer = document.getElementById("gapFill").value.trim().toLowerCase();
            const normalizedCorrectAnswer = correctAnswer.toLowerCase();
    
            if (userAnswer === normalizedCorrectAnswer) {
                document.getElementById("gapFillResult").innerHTML =
                    '<p style="color: green;">Correct! Great job!</p>';
            } else {
                document.getElementById("gapFillResult").innerHTML =
                    `<p style="color: red;">Incorrect. The correct answer is: "${correctAnswer}".</p>`;
            }
        }
    
        function checkDictation() {
            const correctAnswer = "The Liberty Bell rang to mark the occasion of the adoption of the Declaration and to tell the people in the streets that a new country had been born.";
            const userAnswer = document.getElementById("dictation").value.trim().toLowerCase();
            const normalizedCorrectAnswer = correctAnswer.toLowerCase();
    
            if (userAnswer === normalizedCorrectAnswer) {
                document.getElementById("dictationResult").innerHTML =
                    '<p style="color: green;">Excellent! Your dictation is spot on!</p>';
            } else {
                document.getElementById("dictationResult").innerHTML =
                    `<p style="color: red;">Your dictation is incorrect. The correct text is: "${correctAnswer}".</p>`;
            }
        }