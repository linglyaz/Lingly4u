function toggleTranslation(id) {
    const translation = document.getElementById(id);
    translation.style.display = translation.style.display === "block" ? "none" : "block";
}

function checkVocabularyAnswers() {
    const answers = [
        "enormous stockpile", 
        "censorship", 
        "to resign", 
        "guided missiles", 
        "calculated strategy", 
        "virtually", 
        "domination", 
        "public rallies", 
        "to inherit", 
        "farewell speech", 
        "drastic action"
    ];

    // Loop through answers and check user input
    for (let i = 1; i <= answers.length; i++) {
        const userAnswer = document.getElementById(`answer${i}`).value.trim().toLowerCase();
        const correctAnswer = answers[i - 1];
        const resultElement = document.getElementById(`result${i}`);

        // Check if user's answer is correct
        if (userAnswer === correctAnswer.toLowerCase()) {
            resultElement.textContent = `Answer ${i}: Correct!`;
            resultElement.className = 'correct';
        } else {
            resultElement.textContent = `Answer ${i}: Incorrect! Correct answer is "${correctAnswer}".`;
            resultElement.className = 'incorrect';
        }
    }

    // Show results
    document.getElementById("results").style.display = 'block';
}
function checkMultipleChoiceAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'b'
    };

    for (let i = 1; i <= 4; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const feedback = document.getElementById(`feedback${i}`);

        if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
            feedback.textContent = `Answer ${i}: Correct!`;
            feedback.className = 'feedback correct';  // Correct answer - Green
        } else {
            feedback.textContent = `Answer ${i}: Incorrect!`;
            feedback.className = 'feedback incorrect';  // Incorrect answer - Red
        }
    }
}

const keywords = ["Gorbachev", "glasnost", "Communist Party", "Cold War", "military", "expansion", "coup", "demonstrations", "freedom", "Soviet Union", "independence", "perestroika"];

function checkCauseEffectAnswers() {
    for (let i = 1; i <= 4; i++) {
        const cause = document.getElementById(`cause${i}`).value.trim().toLowerCase();
        const effect = document.getElementById(`effect${i}`).value.trim().toLowerCase();
        const feedback = document.getElementById(`feedbackCause${i}`);

        let causeRelevant = keywords.some(keyword => cause.includes(keyword.toLowerCase()));
        let effectRelevant = keywords.some(keyword => effect.includes(keyword.toLowerCase()));

        if (causeRelevant && effectRelevant) {
            feedback.textContent = "Relevant!";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = "Irrelevant. Try again.";
            feedback.className = "feedback incorrect";
        }
    }
}
function checkGrammarAnswers() {
    const answers = [
        "The new policy was approved by the manager.",
        "An experiment was conducted in the lab by researchers.",
        "A charity event will be organized by the students.",
        "A beautiful mural was painted on the wall by the artist.",
        "The park has been cleaned by volunteers."
    ];

    let resultsDiv = document.getElementById("resultss");
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = 'block';

    for (let i = 0; i < answers.length; i++) {
        let userAnswer = document.getElementById(`answer${i + 1}`).value.trim().toLowerCase();
        let feedback = document.createElement("p");
        
        if (userAnswer === answers[i].toLowerCase()) {
            feedback.textContent = `Sentence ${i + 1}: Correct!`;
            feedback.className = 'feedback correct';
        } else {
            feedback.textContent = `Sentence ${i + 1}: Incorrect. Correct answer is "${answers[i]}".`;
            feedback.className = 'feedback incorrect';
        }

        resultsDiv.appendChild(feedback);
    }
}

function checkVoiceAnswers() {
    const answers = [
        "Passive",
        "Active",
        "Passive",
        "Active",
        "Passive"
    ];

    let resultsDiv = document.getElementById("voiceResults");
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = 'block';

    for (let i = 0; i < answers.length; i++) {
        let userAnswer = document.getElementById(`voiceAnswer${i + 1}`).value.trim().toLowerCase();
        let feedback = document.createElement("p");
        
        if ((userAnswer === "active" && answers[i] === "Active") || (userAnswer === "passive" && answers[i] === "Passive")) {
            feedback.textContent = `Sentence ${i + 1}: Correct!`;
            feedback.className = 'feedback correct';
        } else {
            feedback.textContent = `Sentence ${i + 1}: Incorrect. This sentence is in ${answers[i]} voice.`;
            feedback.className = 'feedback incorrect';
        }

        resultsDiv.appendChild(feedback);
    }
}
function checkTask1() {
    // Correct answers for Task 1
    const answers = ["1985", "1990", "1991"];
    let resultsDiv = document.getElementById("task1Results");
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = 'block';
    let feedback = '';

    // Check each answer
    for (let i = 0; i < answers.length; i++) {
        let userAnswer = document.getElementById(`task1Answer${i + 1}`).value.trim();
        if (userAnswer === "") {
            feedback += `<span class="incorrect">Event ${i + 1}: Answer is missing.</span><br>`;
        } else if (userAnswer === answers[i]) {
            feedback += `<span class="correct">Event ${i + 1}: Correct!</span><br>`;
        } else {
            feedback += `<span class="incorrect">Event ${i + 1}: Incorrect. Correct answer is ${answers[i]}.</span><br>`;
        }
    }
    resultsDiv.innerHTML = feedback;
}

function checkTask2() {
    // Correct answers for Task 2
    const answers = [
        "Gorbachev",
        "openness",
        "restructuring",
        "Andrei Sakharov",
        "coup",
        "USSR"
    ];

    let resultsDiv = document.getElementById("task2Results");
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = 'block';

    // Check each answer
    let feedback = '';
    for (let i = 0; i < answers.length; i++) {
        let userAnswer = document.getElementById(`task2Answer${i + 1}`).value.trim();
        if (userAnswer === "") {
            feedback += `<span class="incorrect">Sentence ${i + 1}: Answer is missing.</span><br>`;
        } else if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
            feedback += `<span class="correct">Sentence ${i + 1}: Correct!</span><br>`;
        } else {
            feedback += `<span class="incorrect">Sentence ${i + 1}: Incorrect. Correct answer is "${answers[i]}".</span><br>`;
        }
    }
    resultsDiv.innerHTML = feedback;
}

