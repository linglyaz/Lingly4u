function toggleDefinition(card) {
    const definition = card.querySelector(".definition");
    definition.style.display = definition.style.display === "none" ? "block" : "none";
}
function checkAnswers() {
    // Correct answers array
    const correctAnswers = [
        "instead of", "pursue", "huge", "effort", "stupid", 
        "remain", "reinvent the wheel", "comment", "essential", "take down"
    ];

    let score = 0;
    let feedbackText = '';

    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.getElementById('answer' + i).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[i - 1].toLowerCase();

        const inputField = document.getElementById('answer' + i);

        // Check answer
        if (userAnswer === correctAnswer) {
            inputField.classList.add('correct');
            inputField.classList.remove('incorrect');
            score++;
        } else {
            inputField.classList.add('incorrect');
            inputField.classList.remove('correct');
        }
    }

    if (score === 10) {
        feedbackText = "Congratulations! You got all answers correct!";
    } else {
        feedbackText = `You got ${score} out of 10 correct. Try again!`;
    }

    document.getElementById('feedback').innerText = feedbackText;
}

function checkAnswersComprehension() {
    const answers = {
        question1: "The main issue with homework is that it can be excessive and burdensome.",
        question2: "The author thinks that copying from a textbook may not be helpful for actual learning.",
        question3: "The author believes that homework is essential for language learning because it reinforces vocabulary and grammar.",
        question4: "The author describes copying during homework as a passive task that doesn't promote deep understanding.",
        question5: "The potential benefit of reducing unnecessary homework is that students would have more time for meaningful activities and rest.",
        question6: "The author believes homework in subjects other than languages might be valuable, but it depends on the subject.",
        bonus: "This answer will vary depending on the user's opinion."
    };

    let resultText = '<h3>Your Answers:</h3><ul>';
    let formElements = document.forms['comprehension-form'];

    for (let question in answers) {
        let userAnswer = formElements[question].value.trim();
        let correctAnswer = answers[question];

        resultText += `<li><strong>${question}:</strong><br>Your answer: ${userAnswer || 'No answer provided.'}<br>Correct answer: ${correctAnswer}<br><br></li>`;
    }

    resultText += '</ul>';
    document.getElementById('result').innerHTML = resultText;
}
function checkReadingAnswers1() {
    const correctAnswers = [
        "I don’t think homework is necessary for many subjects and it doesn’t help me.",
        "It's not useful to copy from a textbook because someone else already put in the effort to write it.",
        "When you’re copying, it’s hard to really understand what you’re writing down.",
        "If we didn’t have unnecessary homework, we’d have more time to explore hobbies and interests, making us more interesting and motivated.",
        "Homework helps students review and strengthen what they’ve learned in class.",
        "Some students find homework too much and stressful.",
        "Less homework could give students more free time for extracurricular activities.",
        "Teachers often assign homework to help students get ready for exams."
    ];

    for (let i = 1; i <= 8; i++) {
        const userInput = document.getElementById('sentence' + i).value.trim();
        const result = document.getElementById('result' + i);
        
        if (userInput.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
            result.textContent = "Correct!";
            result.style.color = "green";
        } else {
            result.textContent = "Try again!";
            result.style.color = "red";
        }
    }
}

function checkFillinpp() {
    // Correct answers for matching phrasal verbs to definitions
    var correctAnswers = {
        answer11: "cancel",
        answer22: "look after",
        answer33: "take over",
        answer44: "run out of",
        answer55: "bring up"
    };

    var isCorrect = true;
    for (var key in correctAnswers) {
        var userInput = document.getElementById(key).value.trim().toLowerCase();
        var correctAnswer = correctAnswers[key];

        if (userInput === correctAnswer) {
            document.getElementById(key).classList.remove('incorrect');
            document.getElementById(key).classList.add('correct');
        } else {
            document.getElementById(key).classList.remove('correct');
            document.getElementById(key).classList.add('incorrect');
            isCorrect = false;
        }
    }

    var feedback = isCorrect ? "All answers are correct!" : "Some answers are incorrect. Please try again!";
    document.getElementById("feedbackkkk").textContent = feedback;
}

function checkMatchingAnswers() {
    const answers = {
        match1: "To mention or introduce a topic",
        match2: "To stop using something because there is no more",
        match3: "To manage or take care of something",
        match4: "To start to be in charge of something",
        match5: "To delay or postpone something"
    };

    for (let matchId in answers) {
        const userAnswer = document.getElementById(matchId).value.trim();
        const correctAnswer = answers[matchId];

        const selectElement = document.getElementById(matchId);

        if (userAnswer === correctAnswer) {
            selectElement.classList.add('correct');
            selectElement.classList.remove('incorrect');
        } else {
            selectElement.classList.add('incorrect');
            selectElement.classList.remove('correct');
        }
    }
}

function checkListening() {
    const correctAnswers = {
        listening1: "the impact of too much homework on students",
        listening2: "many subjects are unnecessary for homework",
        listening3: "a waste of time",
        listening4: "it helps students practice",
        listening5: "pursuing hobbies and interests"
    };

    let feedback = '';
    let allCorrect = true;

    for (let id in correctAnswers) {
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[id].toLowerCase();

        const inputField = document.getElementById(id);
        if (userAnswer === correctAnswer) {
            inputField.classList.add('correct');
            inputField.classList.remove('incorrect');
        } else {
            inputField.classList.add('incorrect');
            inputField.classList.remove('correct');
            feedback += `For question ${id.slice(-1)}: Incorrect. The correct answer is '${correctAnswer}'.<br>`;
            allCorrect = false;
        }
    }

    if (allCorrect) {
        feedback = "Congratulations! All answers are correct!";
    } else {
        feedback = "Some answers are incorrect. Please check and try again.";
    }

    document.getElementById('feedback').innerHTML = feedback;
}
function checkListeningTask2() {
    // Correct answers for Listening Task 2
    const correctAnswers = {
        listeningTask2Answer1: "too much homework",
        listeningTask2Answer2: "it's not always helpful and can be a waste of time",
        listeningTask2Answer3: "more time for hobbies and extracurricular activities",
        listeningTask2Answer4: "because it reinforces language skills like vocabulary and grammar",
        listeningTask2Answer5: "we could explore hobbies, relax, or focus on other interests"
    };

    let feedback = '';
    let allCorrect = true;

    // Loop through each question and check the answer
    for (let id in correctAnswers) {
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[id].toLowerCase();

        const inputField = document.getElementById(id);
        if (userAnswer === correctAnswer) {
            inputField.classList.add('correct');
            inputField.classList.remove('incorrect');
        } else {
            inputField.classList.add('incorrect');
            inputField.classList.remove('correct');
            feedback += `For question ${id.slice(-1)}: Your answer was "${userAnswer}". The expected answer is "${correctAnswer}".<br>`;
            allCorrect = false;
        }
    }

    // Show feedback
    if (allCorrect) {
        feedback = "Congratulations! All answers are correct!";
    } else {
        feedback = "Some answers are incorrect. Please review your answers and try again.";
    }

    document.getElementById('listeningTask2Results').innerHTML = feedback;
}

    // Display feedback
    if (allCorrect) {
        feedback = "Congratulations! All answers are correct!";
    } else {
        feedback = "Some answers are incorrect. Please check and try again.";
    }

    document.getElementById('listeningTask2Results').innerHTML = feedback;








