const answers = {
    quiz1: {
        1: "Buky", 
        2: "Nieves", 
        3: "Billy",
        4: "Jurgen",
        5: "Dwith",
        6: "Pearl"
    },
    quiz2: {
        1: "c", 
        2: "b", 
        3: "b", 
        4: "a",
        5: "b", 
        6: "a"
    }
};

function checkAnswer(quizId, questionId, answer) {
    const correctAnswer = answers[quizId][questionId];

    // Remove any previous correct/incorrect styles
    const allAnswers = document.querySelectorAll(`#${quizId} .quiz-question:nth-child(${questionId}) .answer`);
    allAnswers.forEach(ans => ans.classList.remove("correct", "incorrect"));

    // Highlight the selected answer
    if(answer === correctAnswer) {
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect");
    }
}

function showResults() {
    alert("Check the questions to see which answers are correct (green) and which are incorrect (red).");
}

function checkFillintheblank() {
    let correctAnswers = 0;
    const answers = [
        { id: "answer1", correct: "used to" },
        { id: "answer2", correct: "didn't use to" },
        { id: "answer3", correct: "used to" },
        { id: "answer4", correct: "used to" },
        { id: "answer5", correct: "used to" },
        { id: "answer6", correct: "didn't use to" },
        { id: "answer7", correct: "didn't use to" },
        { id: "answer8", correct: "used to" }
    ];

    answers.forEach(function (answer) {
        const userAnswer = document.getElementById(answer.id).value.trim().toLowerCase();
        const inputField = document.getElementById(answer.id);

        if (userAnswer === answer.correct) {
            inputField.style.backgroundColor = "lightgreen";
            correctAnswers++;
        } else {
            inputField.style.backgroundColor = "lightcoral";
        }
    });

    document.getElementById("result").style.display = "block";
    document.getElementById("correctCount").textContent = correctAnswers;
}


function checkSentenceTransformation() {
    // Define the correct answers for comparison
    const correctAnswers = {
        sentenceAnswer1: "She used to go to school by bus when she was young.",
        sentenceAnswer2: "They used to visit their grandparents every weekend.",
        sentenceAnswer3: "I used to not like chocolate when I was a child.",
        sentenceAnswer4: "We used to play football every evening after school.",
        sentenceAnswer5: "She used to not enjoy reading novels when she was younger.",
        sentenceAnswer6: "I used to never travel abroad when I was a teenager."
    };

    // Loop through each input field, compare the user's answer, and provide feedback
    for (let i = 1; i <= 6; i++) {
        const userAnswer = document.getElementById(`sentenceAnswer${i}`).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[`sentenceAnswer${i}`].toLowerCase();
        const inputField = document.getElementById(`sentenceAnswer${i}`);

        // Check if the answer is correct or incorrect
        if (userAnswer === correctAnswer) {
            inputField.style.backgroundColor = "lightgreen"; // Correct answer
        } else {
            inputField.style.backgroundColor = "lightcoral"; // Incorrect answer
        }
    }
}

function checkListeningAnswers() {
    const correctAnswers = {
        answer1: "False",
        answer2: "True",
        answer3: "False",
        answer4: "True",
        answer5: "False",
        answer6: "True",
        answer7: "False"
    };

    for (let i = 1; i <= 7; i++) {
        const userAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
        const correctAnswer = correctAnswers[`answer${i}`];

        if (userAnswer) {
            const userAnswerValue = userAnswer.value;

            if (userAnswerValue === correctAnswer) {
                document.getElementById(`answer${i}_true`).parentElement.style.backgroundColor = "lightgreen";
                document.getElementById(`answer${i}_false`).parentElement.style.backgroundColor = "lightgreen";
            } else {
                document.getElementById(`answer${i}_true`).parentElement.style.backgroundColor = "lightcoral";
                document.getElementById(`answer${i}_false`).parentElement.style.backgroundColor = "lightcoral";
            }
        } else {
            alert("Please answer all questions!");
            return;
        }
    }
}


function checkMCQ3() {
    let correctAnswers = 0;
    
    // Check answer for question 1
    const selectedRadio1 = document.querySelector('input[name="mcq3_1"]:checked');
    if (selectedRadio1 && selectedRadio1.value === "correct") {
        selectedRadio1.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio1) {
        selectedRadio1.parentNode.style.backgroundColor = "lightcoral";
    }

    // Check answer for question 2
    const selectedRadio2 = document.querySelector('input[name="mcq3_2"]:checked');
    if (selectedRadio2 && selectedRadio2.value === "correct") {
        selectedRadio2.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio2) {
        selectedRadio2.parentNode.style.backgroundColor = "lightcoral";
    }

    // Check answer for question 3
    const selectedRadio3 = document.querySelector('input[name="mcq3_3"]:checked');
    if (selectedRadio3 && selectedRadio3.value === "correct") {
        selectedRadio3.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio3) {
        selectedRadio3.parentNode.style.backgroundColor = "lightcoral";
    }

    // Check answer for question 4
    const selectedRadio4 = document.querySelector('input[name="mcq3_4"]:checked');
    if (selectedRadio4 && selectedRadio4.value === "correct") {
        selectedRadio4.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio4) {
        selectedRadio4.parentNode.style.backgroundColor = "lightcoral";
    }

    // Check answer for question 5
    const selectedRadio5 = document.querySelector('input[name="mcq3_5"]:checked');
    if (selectedRadio5 && selectedRadio5.value === "correct") {
        selectedRadio5.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio5) {
        selectedRadio5.parentNode.style.backgroundColor = "lightcoral";
    }

    // Check answer for question 6
    const selectedRadio6 = document.querySelector('input[name="mcq3_6"]:checked');
    if (selectedRadio6 && selectedRadio6.value === "correct") {
        selectedRadio6.parentNode.style.backgroundColor = "lightgreen";
        correctAnswers++;
    } else if (selectedRadio6) {
        selectedRadio6.parentNode.style.backgroundColor = "lightcoral";
    }

    alert("You answered " + correctAnswers + " question(s) correctly.");
}


