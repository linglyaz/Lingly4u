// Hide definitions on page load
document.querySelectorAll('.definition').forEach(def => {
    def.style.display = 'none';
});

// Function to check fill-in-the-blank answers
function checkAnswerfillin(inputId, correctAnswer) {
    const userAnswer = document.getElementById(inputId).value.toLowerCase().trim();
    const resultElement = document.getElementById('result' + inputId.charAt(inputId.length - 1));
    
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
        resultElement.style.color = "red";
    }
}

// Function to toggle the visibility of definitions
function toggleDefinition(definitionId) {
    const definitionElement = document.getElementById(definitionId);
    if (definitionElement.style.display === "none" || definitionElement.style.display === "") {
        definitionElement.style.display = "block";
    } else {
        definitionElement.style.display = "none";
    }
}
// Function to check True/False questions
function checkAnswersForQuestions() {
    const answers = {
        q1: { correct: 'true', explanation: 'By 2030, scientists predict that 25% of all species may become extinct due to environmental changes and habitat loss.' },
        q2: { correct: 'false', explanation: 'The main cause of deforestation is primarily agriculture and logging, not the construction of cities.' },
        q3: { correct: 'true', explanation: 'Acid rain is caused by the release of sulfur dioxide and nitrogen oxides into the atmosphere, typically from factories and vehicle emissions.' },
        q4: { correct: 'false', explanation: 'Nuclear energy is controversial, as it carries risks such as radiation and waste disposal issues, despite being an alternative to fossil fuels.' },
        q5: { correct: 'true', explanation: 'Organizations like Greenpeace have played a major role in advocating for animal rights and halting illegal hunting activities.' }
    };

    let score = 0;
    let feedback = ''; // Store feedback for incorrect answers

    for (const [question, { correct, explanation }] of Object.entries(answers)) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (userAnswer && userAnswer.value === correct) {
            score++;
        } else {
            // Provide explanation for incorrect answers
            feedback += `<p><strong>${question.charAt(1)}</strong>: Incorrect! ${explanation}</p>`;
        }
    }

    document.getElementById('result').innerText = `You got ${score} out of 5 correct!`;
    document.getElementById('result').style.color = score === 5 ? "green" : "red";

    // Display detailed feedback for incorrect answers
    document.getElementById('result').innerHTML += feedback;
}


    let draggedItem = null;

    function allowDrop(event) {
      event.preventDefault();
    }
    
    function drag(event) {
      draggedItem = event.target;
    }
    
    function drop(event) {
      event.preventDefault();
      if (event.target.classList.contains('droppable')) {
        event.target.appendChild(draggedItem);
      }
    }
    
    function checkResultsForDragDrop() {
      const descriptions = document.querySelectorAll('.droppable');
      let correctCount = 0;
      const explanations = {
        'A': "Environmental organizations work to protect the environment and wildlife.",
        'B': "Rain forest destruction leads to the loss of species.",
        'C': "Solutions for energy include renewable resources like wind and solar.",
        'D': "Acid rain is caused by pollution and harms wildlife.",
        'E': "Fossil fuels are running out and are the main source of energy today.",
        'F': "Governments play a crucial role in protecting ecosystems and replanting forests."
      };
    
      descriptions.forEach(description => {
        const droppedItem = description.querySelector('.draggable');
        const correctAnswer = description.id.slice(-1);  // Get the letter (A, B, C, etc.)
    
        if (droppedItem && droppedItem.getAttribute('data-answer') === correctAnswer) {
          description.style.backgroundColor = 'lightgreen';  // Correct match
          correctCount++;
        } else if (droppedItem) {
          description.style.backgroundColor = 'lightcoral';  // Incorrect match
          description.innerHTML += `<p>Correct: ${droppedItem.getAttribute('data-answer')} - ${explanations[droppedItem.getAttribute('data-answer')]}</p>`;
        }
      });
    
      document.getElementById('result').innerText = `You got ${correctCount} correct out of ${descriptions.length}.`;
    }
    function checkAnswers() {
        const correctAnswers = [
            "to become extinct",
            "wildlife",
            "environment",
            "acid rain",
            "chemicals",
            "fossil fuels",
            "geothermal energy",
            "nuclear energy",
            "solar energy"
        ];

        const userAnswers = [
            document.getElementById('answer1').value.trim().toLowerCase(),
            document.getElementById('answer2').value.trim().toLowerCase(),
            document.getElementById('answer3').value.trim().toLowerCase(),
            document.getElementById('answer4').value.trim().toLowerCase(),
            document.getElementById('answer5').value.trim().toLowerCase(),
            document.getElementById('answer6').value.trim().toLowerCase(),
            document.getElementById('answer7').value.trim().toLowerCase(),
            document.getElementById('answer8').value.trim().toLowerCase(),
            document.getElementById('answer9').value.trim().toLowerCase()
        ];

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        userAnswers.forEach((answer, index) => {
            const result = document.createElement('p');
            if (answer === correctAnswers[index]) {
                result.innerText = `Answer ${index + 1}: Correct!`;
                result.classList.add('correct');
            } else {
                result.innerText = `Answer ${index + 1}: Incorrect. The correct answer is "${correctAnswers[index]}".`;
                result.classList.add('incorrect');
            }
            resultsContainer.appendChild(result);
        });
    }
    function checkExercise1() {
        const answers = [
            "is it", 
            "do they", 
            "hasn't she", 
            "can't you", 
            "shouldn't we"
        ];
        let feedback = "";
        for (let i = 1; i <= 5; i++) {
            const userAnswer = document.getElementById(`answer${i}`).value.trim().toLowerCase();
            const inputField = document.getElementById(`answer${i}`);
            if (userAnswer === answers[i - 1]) {
                feedback += `Question ${i}: Correct!<br>`;
                inputField.classList.add("correct");
                inputField.classList.remove("incorrect");
            } else {
                feedback += `Question ${i}: Incorrect! Correct answer is "${answers[i - 1]}".<br>`;
                inputField.classList.add("incorrect");
                inputField.classList.remove("correct");
            }
        }
        document.getElementById('feedback1').innerHTML = feedback;
    }

    function checkQuestionTags() {
        const answers = {
            'task1-1': "isn't she",
            'task1-2': "have they",
            'task1-3': "do you",
            'task1-4': "won't he",
            'task1-5': "shouldn't we"
        };

        let feedback = "";
        let correct = true;

        for (let task in answers) {
            const userAnswer = document.getElementById(task).value.trim().toLowerCase();
            const correctAnswer = answers[task];

            if (userAnswer === correctAnswer) {
                document.getElementById(task).classList.add("correct");
                document.getElementById(task).classList.remove("incorrect");
            } else {
                document.getElementById(task).classList.add("incorrect");
                document.getElementById(task).classList.remove("correct");
                correct = false;
            }
        }

        feedback = correct ? "All answers are correct!" : "Some answers are incorrect. Please try again!";
        document.getElementById("task1-feedback").innerHTML = feedback;
    }

    function checkCorrections() {
        const corrections = {
            'task2-1': "She doesn't like coffee, does she?",
            'task2-2': "They were happy about the news, weren't they?",
            'task2-3': "You have seen that movie, haven't you?",
            'task2-4': "We can't leave yet, can we?",
            'task2-5': "Mark doesn't play tennis, does he?"
        };

        let feedback = "";
        let correct = true;

        for (let task in corrections) {
            const userAnswer = document.getElementById(task).value.trim();
            const correctAnswer = corrections[task];

            if (userAnswer === correctAnswer) {
                document.getElementById(task).classList.add("correct");
                document.getElementById(task).classList.remove("incorrect");
            } else {
                document.getElementById(task).classList.add("incorrect");
                document.getElementById(task).classList.remove("correct");
                correct = false;
            }
        }

        feedback = correct ? "All corrections are correct!" : "Some corrections are incorrect. Please try again!";
        document.getElementById("task2-feedback").innerHTML = feedback;
    }


  // Check answers for task 1 (fill in the blanks)
  function checkAnswers() {
    var correctAnswers = {
        blank1: "25",
        blank2: "acid",
        blank3: "reduce"
    };

    var feedback = document.getElementById("feedback1");
    var correct = true;

    // Checking the answers
    for (var blank in correctAnswers) {
        var userAnswer = document.getElementById(blank).value.trim();
        var correctAnswer = correctAnswers[blank];

        if (userAnswer === correctAnswer) {
            document.getElementById(blank).classList.add("correct");
            document.getElementById(blank).classList.remove("incorrect");
        } else {
            document.getElementById(blank).classList.add("incorrect");
            document.getElementById(blank).classList.remove("correct");
            correct = false;
        }
    }

    if (correct) {
        feedback.innerHTML = "All answers are correct!";
    } else {
        feedback.innerHTML = "Some answers are incorrect. Please try again!";
    }
}

// Check answers for task 2 (matching)
function checkMatchingAnswers() {
    var correctAnswers = {
        match1: "b",
        match2: "a",
        match3: "a"
    };

    var feedback = document.getElementById("feedback2");
    var correct = true;

    // Checking the answers
    for (var match in correctAnswers) {
        var userAnswer = document.getElementById(match).value.trim();
        var correctAnswer = correctAnswers[match];

        if (userAnswer === correctAnswer) {
            document.getElementById(match).classList.add("correct");
            document.getElementById(match).classList.remove("incorrect");
        } else {
            document.getElementById(match).classList.add("incorrect");
            document.getElementById(match).classList.remove("correct");
            correct = false;
        }
    }

    if (correct) {
        feedback.innerHTML = "All matches are correct!";
    } else {
        feedback.innerHTML = "Some matches are incorrect. Please try again!";
    }
}