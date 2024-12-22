function checkAnswersss() {
    // Correct answers
    const correctAnswers = {
        answer1: 'tired',
        answer2: 'irritable',
        answer3: 'nutritional needs',
        answer4: 'Vitamin C',
        answer5: 'carrots',
        answer6: 'scurvy',
        answer7: 'vitamin C',
        answer8: 'ingredients',
        answer9: 'traditional'
    };

    let correctCount = 0;
    let totalQuestions = 9;
    let feedbackMessage = '';

    // Check each answer
    for (let i = 1; i <= totalQuestions; i++) {
        let userAnswer = document.getElementById('answer' + i).value.trim().toLowerCase();
        let correctAnswer = correctAnswers['answer' + i].toLowerCase();
        let inputElement = document.getElementById('answer' + i);

        if (userAnswer === correctAnswer) {
            inputElement.style.backgroundColor = 'lightgreen';
            correctCount++;
        } else {
            inputElement.style.backgroundColor = 'lightcoral';
        }
    }

    // Provide feedback based on correct count
    if (correctCount === totalQuestions) {
        feedbackMessage = 'Great job! All answers are correct.';
    } else {
        feedbackMessage = 'You have ' + correctCount + ' correct answers. Please review the incorrect ones.';
    }

    // Display the feedback message
    document.getElementById('feedbackkk').textContent = feedbackMessage;
}

function checkSummary() {
    const summary = document.getElementById('summary').value.trim().toLowerCase();
    const correctKeyPoints = [
        ["eating habits affect how we feel", "eating habits influence our mood", "eating habits impact how we feel"],
        ["foods give us energy", "foods provide us energy", "foods supply energy"],
        ["cooking combines ingredients", "cooking mixes ingredients", "cooking brings ingredients together"],
        ["fruit and vegetables prevent diseases", "fruit and vegetables avoid diseases", "fruit and vegetables prevent scurvy"]
    ];

    let feedback = '';
    if (summary.length < 1) {
        feedback = 'Please enter a summary of the text.';
    } else if (checkAnswerCorrectness(summary, correctKeyPoints)) {
        feedback = 'Your summary captures the main points of the text well!';
    } else {
        feedback = 'Your summary doesn’t reflect the main points. Try again!';
    }

    document.getElementById('summary-result').textContent = feedback;
}

// Function to check if the answer contains key phrases or related words
function checkAnswerCorrectness(summary, correctKeyPoints) {
    return correctKeyPoints.some(keyPointGroup => {
        return keyPointGroup.some(phrase => summary.includes(phrase.toLowerCase()));
    });
}



  // Task 1 Answers
  const task1Answers = ["eat", "were", "drink", "include"];
    
  function checkTask1() {
    let feedback = '';
    for (let i = 0; i < task1Answers.length; i++) {
      const userAnswer = document.getElementById(`task1-q${i + 1}`).value.trim().toLowerCase();
      if (userAnswer === task1Answers[i]) {
        feedback += `<p class="correct">Question ${i + 1}: Correct!</p>`;
      } else {
        feedback += `<p class="incorrect">Question ${i + 1}: Incorrect. The correct answer is "${task1Answers[i]}".</p>`;
      }
    }
    document.getElementById('task1-feedback').innerHTML = feedback;
  }

  function checkTask2() {
    var answers = [
        { id: 'task2-q1', correct: "He ought to exercise regularly to maintain his energy." },
        { id: 'task2-q2', correct: "They should reduce their screen time to improve their sleep quality." },
        { id: 'task2-q3', correct: "You should stay hydrated for better health." },
        { id: 'task2-q4', correct: "You must avoid junk food to feel more energetic." },
        { id: 'task2-q5', correct: "He should sleep at least 7 hours each night to stay healthy." },
    ];

    var feedback = "";
    var correctCount = 0;

    answers.forEach(function(answer, index) {
        var userAnswer = document.getElementById(answer.id).value.trim().toLowerCase();
        var correctAnswer = answer.correct.toLowerCase();

        var resultClass = "";
        var feedbackText = "";

        // Check if the user's answer matches the correct answer
        if (userAnswer === correctAnswer) {
            resultClass = "correct";
            feedbackText = "Correct!";
            correctCount++;
        } else {
            resultClass = "incorrect";
            feedbackText = `Incorrect! The correct answer is: "${answer.correct}".`;
        }

        feedback += `<p class="${resultClass}">${feedbackText}</p>`;
    });

    // Display overall feedback
    document.getElementById("task2-feedback").innerHTML = feedback;
}

function checkAnswers() {
    const answers = {
        blank1: "tired",
        blank2: "cross",
        blank3: "scurvy",
        blank4: "vitamin C",
        blank5: "doctor",
        blank6: "healthy",
        blank7: "meats",
        blank8: "eggs",
        blank9: "fish",
        blank10: "combine"
    };

    let correctCount = 0;
    const form = document.getElementById("taskForm");
    const feedback = document.getElementById("feedback");

    for (let i = 1; i <= 10; i++) {
        const userAnswer = form["blank" + i].value.trim().toLowerCase();
        const correctAnswer = answers["blank" + i].toLowerCase();

        if (userAnswer === correctAnswer) {
            form["blank" + i].classList.add("correct");
            form["blank" + i].classList.remove("incorrect");
            correctCount++;
        } else {
            form["blank" + i].classList.add("incorrect");
            form["blank" + i].classList.remove("correct");
        }
    }

    if (correctCount === 10) {
        feedback.textContent = "Congratulations! All answers are correct.";
    } else {
        feedback.textContent = `You got ${correctCount} out of 10 correct. Try again!`;
    }
}



function checkListAnswers() {
    const answers = {
        blank1: "tired",
        blank2: "cross",
        blank3: "scurvy",
        blank4: "vitamin C",
        blank5: "doctor",
        blank6: "healthy",
        blank7: "meats",
        blank8: "eggs",
        blank9: "fish",
        blank10: "combine"
    };

    let correctCount = 0;
    const form = document.getElementById("taskForm");
    const feedback = document.getElementById("feedback");

    for (let i = 1; i <= 10; i++) {
        const userAnswer = form["blank" + i].value.trim().toLowerCase();
        const correctAnswer = answers["blank" + i].toLowerCase();

        if (userAnswer === correctAnswer) {
            form["blank" + i].classList.add("correct");
            form["blank" + i].classList.remove("incorrect");
            correctCount++;
        } else {
            form["blank" + i].classList.add("incorrect");
            form["blank" + i].classList.remove("correct");
        }
    }

    if (correctCount === 10) {
        feedback.textContent = "Congratulations! All answers are correct.";
    } else {
        feedback.textContent = `You got ${correctCount} out of 10 correct. Try again!`;
    }
}


         
   // Correct answers for each question
   const correctAnswers = {
    answer1: ["tired, cross", "feel tired and cross", "hungry until lunch"],
    answer2: ["food affects health", "what we eat affects us", "health depends on food"],
    answer3: ["meats, eggs, fish", "meats, fish, poultry", "eggs, fish, poultry"],
    answer4: ["fruits, vegetables, milk, cheese", "vegetables, fruits, dairy products", "milk, cheese, fruits, vegetables"],
    answer5: ["staying healthy", "eating apples helps health", "apple prevents sickness"],
    answer6: ["lacked vitamin c", "no fresh food, lacked vitamin c", "lack of vitamin c caused scurvy"],
    answer7: ["important part of food", "served at every meal", "bread is served daily"]
};

// Function to calculate similarity between two strings
function getSimilarity(str1, str2) {
    const [shorter, longer] = str1.length < str2.length ? [str1, str2] : [str2, str1];
    let matchCount = 0;

    for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] === longer[i]) matchCount++;
    }

    return matchCount / longer.length;
}

// Function to check answers for a specific question
function checkAnswer(inputId, answerKey) {
    const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
    const possibleAnswers = correctAnswers[answerKey];

    for (const correctAnswer of possibleAnswers) {
        if (getSimilarity(userAnswer, correctAnswer.toLowerCase()) > 0.8) {
            document.getElementById(inputId).classList.add("correct");
            document.getElementById(inputId).classList.remove("incorrect");
            return true;
        }
    }

    document.getElementById(inputId).classList.add("incorrect");
    document.getElementById(inputId).classList.remove("correct");
    return false;
}

// Function to check all answers
function checkAllAnswers() {
    let correctCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const isCorrect = checkAnswer(`answer${i}`, `answer${i}`);
        if (isCorrect) correctCount++;
    }

    const feedback = document.getElementById("finalFeedback");
    if (correctCount === totalQuestions) {
        feedback.textContent = "Congratulations! All answers are correct.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `You got ${correctCount} out of ${totalQuestions} correct. Try again!`;
        feedback.style.color = "red";
    }
}