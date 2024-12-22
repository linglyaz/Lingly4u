const answers = {
    blank1: "capital",
    blank2: "trinkets",
    blank3: "Statue of Liberty",
    blank4: "theater",
    blank5: "diversity"
};

function checkFillAnswers() {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = ''; // Clear previous feedback
    let score = 0;

    for (let key in answers) {
        const input = document.getElementById(key);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = answers[key].toLowerCase();

        if (userAnswer === correctAnswer) {
            input.style.borderColor = 'green';
            feedback.innerHTML += `<p class="correct">Question ${key.slice(-1)}: Correct!</p>`;
            score++;
        } else {
            input.style.borderColor = 'red';
            feedback.innerHTML += `<p class="incorrect">Question ${key.slice(-1)}: Incorrect. The correct answer is "${answers[key]}".</p>`;
        }
    }

    feedback.innerHTML += `<p><strong>Your score: ${score} out of ${Object.keys(answers).length}</strong></p>`;
}



function checkmatchAnswers() {
    // Correct answers mapping
    const correctAnswers = {
        wallStreet: "finance",
        broadway: "theatre",
        libertyIsland: "statue",
        greenwichVillage: "nightlife",
        fifthAvenue: "shopping"
    };

    // Get feedback container and initialize variables
    const feedback = document.getElementById('matchFeedback');
    feedback.innerHTML = ''; // Clear previous feedback
    let score = 0;

    // Iterate through each question
    for (let key in correctAnswers) {
        const userAnswer = document.getElementById(key).value; // User's selected answer
        const correctAnswer = correctAnswers[key]; // Correct answer
        const element = document.getElementById(key); // Dropdown element

        if (userAnswer === correctAnswer) {
            // Correct answer: mark green
            element.style.borderColor = 'green';
            feedback.innerHTML += `<p style="color: green;">${formatKey(key)}: Correct!</p>`;
            score++;
        } else {
            // Incorrect answer: mark red and show correct answer
            element.style.borderColor = 'red';
            feedback.innerHTML += `<p style="color: red;">${formatKey(key)}: Incorrect. Correct answer: "${correctAnswer}".</p>`;
        }
    }

    // Display the final score
    feedback.innerHTML += `<p><strong>Your score: ${score} out of ${Object.keys(correctAnswers).length}</strong></p>`;
}

// Helper function to format keys (e.g., "wallStreet" -> "Wall Street")
function formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}




  // Task 1 Answers
  const answersTask1 = {
    decision: "make",
    rain: "heavy",
    wrong: "completely",
    risk: "take",
    tea: "strong",
    advice: "give",
    traffic: "heavy",
    chance: "take",
    mistake: "make",
    coffee: "strong"
};

function checkTask1() {
    const feedback = document.getElementById('feedbackTask1');
    feedback.innerHTML = ''; // Clear previous feedback
    let score = 0;

    for (let key in answersTask1) {
        const input = document.getElementById(key);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = answersTask1[key];

        if (userAnswer === correctAnswer) {
            input.style.borderColor = 'green';
            feedback.innerHTML += `<p class="correct">${key.charAt(0).toUpperCase() + key.slice(1)}: Correct!</p>`;
            score++;
        } else {
            input.style.borderColor = 'red';
            feedback.innerHTML += `<p class="incorrect">${key.charAt(0).toUpperCase() + key.slice(1)}: Incorrect. Correct answer is "${correctAnswer}".</p>`;
        }
    }

    feedback.innerHTML += `<p><strong>Your score: ${score} out of ${Object.keys(answersTask1).length}</strong></p>`;
}

function checkTask2() {
    const feedback = document.getElementById('feedbackTask2');
    feedback.innerHTML = ''; // Clear previous feedback
    const story = document.getElementById('collocationStory').value.trim().toLowerCase();

    const collocations = ["make a decision", "burst into tears", "heavy traffic", "take a chance", "strong coffee"];
    let foundCount = 0;

    collocations.forEach(collocation => {
        if (story.includes(collocation)) {
            foundCount++;
        }
    });

    if (foundCount >= 5) {
        feedback.innerHTML = `<p class="correct">Great job! You've used ${foundCount} collocations correctly in your story!</p>`;
    } else {
        feedback.innerHTML = `<p class="incorrect">Your story only includes ${foundCount} valid collocations. Try to include at least 5 from the list.</p>`;
    }
}




    // Correct answers for note-taking task
    const correctAnswers = {
        fact1: "24 dollars",
        fact2: "the Iroquois",
        landmark1: "Liberty",
        immigrants1: "Gateway",
        highlight1: "Radio City Music Hall",
        highlight2: "Carnegie Hall",
        feature1: "24-hour transportation"
    };

    // Function to check answers for note-taking task
    function checkNoteTakingAnswers() {
        let feedback = '';
        for (const [key, value] of Object.entries(correctAnswers)) {
            const input = document.getElementById(key);
            if (input.value.trim().toLowerCase() === value.toLowerCase()) {
                input.style.borderColor = "green";
                input.classList.add('correct');
                input.classList.remove('incorrect');
            } else {
                input.style.borderColor = "red";
                input.classList.add('incorrect');
                input.classList.remove('correct');
                feedback += `Incorrect for ${key.replace(/fact|landmark|immigrants|highlight|feature/, '').toUpperCase()}. `;
            }
        }
        document.getElementById('noteTakingFeedback').textContent = feedback ? feedback : "All answers are correct!";
    }

    // Function to check summary
    function checkSummary() {
        const summary = document.getElementById('summaryText').value.trim();
        const feedback = summary.length > 0 ? 
            "Thank you for your summary! A teacher will review it for personalized feedback." : 
            "Please write a summary before submitting.";
        const feedbackElement = document.getElementById('summaryFeedback');
        feedbackElement.textContent = feedback;
        feedbackElement.style.color = summary.length > 0 ? "green" : "red";
    }
