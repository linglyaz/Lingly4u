function toggleDefinition(card) {
    const definition = card.querySelector('.definition');
    if (definition.classList.contains('hidden')) {
        definition.classList.remove('hidden');
    } else {
        definition.classList.add('hidden');
    }
}
function checkAnswers() {
    const answers = [
        "Rite of Hospitality",
        "Grace",
        "Dietary Regulation",
        "To Forbid",
        "Sacred Animal",
        "To Relish",
        "Hardboiled Eggs",
        "To Dye",
        "Mormons",
        "To Cement Friendship"
    ];

    let feedback = "";
    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.trim();
        if (userAnswer === answers[i - 1]) {
            feedback += `Question ${i}: Correct!<br>`;
        } else {
            feedback += `Question ${i}: Incorrect. Correct answer: "${answers[i - 1]}".<br>`;
        }
    }
    document.getElementById('feedback').innerHTML = feedback;
}
function goBack() {
    // Implement the functionality to go back to the previous page
    window.history.back();
}
 // Function to check True/False answers
 function checkTF(isTrue, id) {
    const answerDiv = document.getElementById(id + '_answer');
    const correctDiv = document.getElementById(id + '_false');
    if (isTrue) {
        answerDiv.style.display = 'block';
        correctDiv.style.display = 'none';
    } else {
        answerDiv.style.display = 'none';
        correctDiv.style.display = 'block';
    }
}
function checkTF(isCorrect, questionId) {
    var answerDiv = document.getElementById(questionId + '_answer');
    var falseDiv = document.getElementById(questionId + '_false');
    
    if (isCorrect) {
        answerDiv.classList.add('correct');
        answerDiv.classList.remove('incorrect');
        answerDiv.style.display = 'block';
        falseDiv.style.display = 'none';
    } else {
        answerDiv.classList.add('incorrect');
        answerDiv.classList.remove('correct');
        answerDiv.style.display = 'block';
        falseDiv.style.display = 'none';
    }
}


// Function to check Multiple Choice answers
function checkMC(correctAnswer, id, correctText) {
    const answerDiv = document.getElementById(id);
    if (answerDiv) {
        answerDiv.innerHTML = correctAnswer === 'b' ? 'Correct! ' + correctText : 'Incorrect.';
        answerDiv.style.display = 'block';
    }
}
function checkMC(correctAnswer, questionId, selectedAnswer) {
    var answerDiv = document.getElementById(questionId);
    
    if (selectedAnswer === correctAnswer) {
        answerDiv.classList.add('correct');
        answerDiv.classList.remove('incorrect');
        answerDiv.innerHTML = 'Correct!';
    } else {
        answerDiv.classList.add('incorrect');
        answerDiv.classList.remove('correct');
        answerDiv.innerHTML = 'Incorrect!';
    }
    answerDiv.style.display = 'block';
}

    // Checking comparatives answers
    function checkComparatives() {
        const answers = ["more comfortable", "older", "hotter", "more interesting", "narrower"];
        let results = '';
        for (let i = 0; i < answers.length; i++) {
            const userAnswer = document.getElementById(`comp${i + 1}`).value.trim().toLowerCase();
            results += userAnswer === answers[i] ? `Q${i + 1}: Correct!<br>` : `Q${i + 1}: Incorrect, the correct answer is '${answers[i]}'.<br>`;
        }
        document.getElementById('compResults').innerHTML = results;
    }

    // Checking superlatives answers
    function checkSuperlatives() {
        const answers = ["the most beautiful", "the highest", "the most intelligent", "the worst", "the best"];
        let results = '';
        for (let i = 0; i < answers.length; i++) {
            const userAnswer = document.getElementById(`sup${i + 1}`).value.trim().toLowerCase();
            results += userAnswer === answers[i] ? `Q${i + 1}: Correct!<br>` : `Q${i + 1}: Incorrect, the correct answer is '${answers[i]}'.<br>`;
        }
        document.getElementById('supResults').innerHTML = results;
    }

 

    function checkAnswers33() {
        // Correct answers
        const answers = {
            q1: "True",
            q2: "False",
            q3: "True",
            q4: "False",
            q5: "False",
            q6: "True"
        };

        // Check each question
        for (let question in answers) {
            const userAnswer = document.getElementById(question).value.trim();
            const feedbackElement = document.getElementById('feedback-' + question);
            if (userAnswer === answers[question]) {
                feedbackElement.textContent = "Correct!";
                feedbackElement.classList.add('correct');
                feedbackElement.classList.remove('incorrect');
            } else {
                feedbackElement.textContent = "Incorrect!";
                feedbackElement.classList.add('incorrect');
                feedbackElement.classList.remove('correct');
            }
            feedbackElement.style.display = 'block';
        }
    }


    function checkAnswers0000() {
        // Correct answers for fill-in-the-blanks
        const correctAnswers = {
            blank1: "oil",
            blank2: "pores",
            blank3: "pigment",
            blank4: "smaller",
            blank5: "Warm-blooded"
        };

        // Loop through each blank and check the answer
        Object.keys(correctAnswers).forEach(function(question) {
            const userAnswer = document.getElementById(question).value.trim().toLowerCase();
            const feedbackElement = document.getElementById('feedback-' + question);
            const correctAnswer = correctAnswers[question].toLowerCase();

            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Correct!";
                feedbackElement.classList.add('correct');
                feedbackElement.classList.remove('incorrect');
            } else {
                feedbackElement.textContent = "Incorrect!";
                feedbackElement.classList.add('incorrect');
                feedbackElement.classList.remove('correct');
            }

            feedbackElement.style.display = 'block';
        });
    }