

// Function to check the answer for comprehension questions
function checkcpAnswer(questionId, correctAnswer, explanation) {
    const userAnswer = document.getElementById(questionId).value.trim();
    const resultSpan = document.getElementById("result" + questionId.charAt(1));  // Dynamically target the result span
    const feedbackSpan = document.createElement("span");  // Create a new element for feedback
    feedbackSpan.classList.add("feedback");
    
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase();

    // Allow close matches to be accepted
    if (normalizedUserAnswer === normalizedCorrectAnswer || userAnswer.includes(correctAnswer)) {
        resultSpan.textContent = "Correct!";
        resultSpan.classList.remove("incorrect");
        resultSpan.classList.add("correct");
        feedbackSpan.textContent = "";  // Clear feedback if correct
    } else {
        resultSpan.textContent = "Incorrect, try again!";
        resultSpan.classList.remove("correct");
        resultSpan.classList.add("incorrect");
        feedbackSpan.textContent = `Correct Answer: ${explanation}`;  // Show the correct answer
    }

    // Append feedback span to result
    resultSpan.classList.remove("hidden");
    resultSpan.appendChild(feedbackSpan);
}



// Function to check the answer for True/False questions
function checkTrueFalse(questionId, userAnswer) {
    const resultSpan = document.getElementById(questionId);
    let correctAnswer = false;

    // Define the correct answers for each statement
    if (questionId === 'false1') {
        correctAnswer = false; // Correct answer is "False"
    } else if (questionId === 'false2') {
        correctAnswer = false; // Correct answer is "False"
    } else if (questionId === 'true3') {
        correctAnswer = true; // Correct answer is "True"
    }

    // Check if the user's answer matches the correct answer
    if (userAnswer === correctAnswer) {
        resultSpan.textContent = "Correct!";
        resultSpan.classList.remove("incorrect");
        resultSpan.classList.add("correct");
    } else {
        resultSpan.textContent = "Incorrect!";
        resultSpan.classList.remove("correct");
        resultSpan.classList.add("incorrect");
    }

    // Show the result span
    resultSpan.classList.remove("hidden");
}

// Function to check the matches
function checkMatches() {
    let correctAnswers = {
        match1: "Eastern Orthodox Christianity",  // Correct match for "Hardboiled eggs dyed red"
        match2: "Judaism",                      // Correct match for "Bread and apples dipped in honey"
        match3: "Islam"                         // Correct match for "Avoiding pork and alcohol"
    };

    // Check the selected options for each match
    let result = true;  // Flag to track if all answers are correct
    for (let i = 1; i <= 3; i++) {
        let userAnswer = document.getElementById(`match${i}`).value;
        let resultSpan = document.createElement("span");

        if (userAnswer === correctAnswers[`match${i}`]) {
            resultSpan.textContent = "Correct!";
            resultSpan.classList.add("correct");
        } else {
            resultSpan.textContent = "Incorrect!";
            resultSpan.classList.add("incorrect");
            result = false;  // If any answer is wrong, set result to false
        }

        // Append the result text next to the select element
        document.getElementById(`match${i}`).parentNode.appendChild(resultSpan);
    }

    // Show the final result message
    let matchResults = document.getElementById("matchResults");
    if (result) {
        matchResults.textContent = "All answers are correct!";
        matchResults.classList.remove("incorrect");
        matchResults.classList.add("correct");
    } else {
        matchResults.textContent = "Some answers are incorrect. Please try again.";
        matchResults.classList.remove("correct");
        matchResults.classList.add("incorrect");
    }

    // Show the final result message
    matchResults.classList.remove("hidden");
}


// Check answers for Grammar Exercise 1
function checkGerundInfinitive1() {
    var answers1 = {
        giAnswer1: 'reading',
        giAnswer2: 'to travel',
        giAnswer3: 'talking',
        giAnswer4: 'to start',
        giAnswer5: 'learning'
    };

    for (var key in answers1) {
        var userAnswer = document.getElementById(key).value.toLowerCase().trim();
        var correctAnswer = answers1[key];

        var inputElement = document.getElementById(key);
        if (userAnswer === correctAnswer) {
            inputElement.classList.add('correct');
            inputElement.classList.remove('incorrect');
        } else {
            inputElement.classList.add('incorrect');
            inputElement.classList.remove('correct');
        }
    }
}

// Check answers for Grammar Exercise 2
function checkGerundInfinitive2() {
    var answers2 = {
        gi2Answer1: 'waiting',
        gi2Answer2: 'to see',
        gi2Answer3: 'going',
        gi2Answer4: 'to help',
        gi2Answer5: 'doing'
    };

    for (var key in answers2) {
        var userAnswer = document.getElementById(key).value.toLowerCase().trim();
        var correctAnswer = answers2[key];

        var inputElement = document.getElementById(key);
        if (userAnswer === correctAnswer) {
            inputElement.classList.add('correct');
            inputElement.classList.remove('incorrect');
        } else {
            inputElement.classList.add('incorrect');
            inputElement.classList.remove('correct');
        }
    }
}



// Function to check Detail Exercise
function checkDetail() {
    const detailAnswer = document.getElementById('detail').value.toLowerCase();
    const result = document.getElementById('detailResult');

    if (detailAnswer.includes('religion') && detailAnswer.includes('food')) {  // Adjust condition for appropriate answer
        result.textContent = "Correct!";
        result.className = 'correct';
    } else {
        result.textContent = "Incorrect. Please try again.";
        result.className = 'incorrect';
    }

    result.classList.remove('hidden');
}

// Function to check Comprehension Exercises
function checkComprehension(id, correctAnswer) {
    const userAnswer = document.getElementById(id).value.toLowerCase().trim();
    const result = document.getElementById(id + 'Result');

    if (userAnswer.includes(correctAnswer.toLowerCase())) {
        result.textContent = "Correct!";
        result.className = 'correct';
    } else {
        result.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        result.className = 'incorrect';
    }

    result.classList.remove('hidden');
}

// Function to check Fill-in-the-Blank Exercises
function checkFill(id, ...correctAnswers) {
    const userAnswer = document.getElementById(id).value.toLowerCase().trim();
    const result = document.getElementById(id + 'Result');

    // Check if the user's input matches any of the correct answers
    if (correctAnswers.some(answer => userAnswer === answer.toLowerCase())) {
        result.textContent = "Correct!";
        result.className = 'correct';
    } else {
        result.textContent = `Incorrect. The correct answer(s): ${correctAnswers.join(' or ')}`;
        result.className = 'incorrect';
    }

    result.classList.remove('hidden');
}

