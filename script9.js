function checkAnswers() {
    // Define correct answers
    const answers = [
        "conqueror", "expansion", "navy", "invasion", "scorched earth",
        "retreat", "shelter", "alliance", "combat", "unification"
    ];

    // Collect user answers
    let correctCount = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.getElementById("input" + i).value.trim().toLowerCase();
        if (userAnswer === answers[i - 1]) {
            correctCount++;
            document.getElementById("input" + i).style.borderColor = "green";
        } else {
            document.getElementById("input" + i).style.borderColor = "red";
        }
    }

    // Display result
    const result = document.getElementById("result");
    if (correctCount === 10) {
        result.textContent = "Excellent! All answers are correct.";
        result.style.color = "green";
    } else {
        result.textContent = `You got ${correctCount} out of 10 correct. Try again!`;
        result.style.color = "red";
    }
}

   // Correct answers for the sequence of events
   const correctOrder = [3, 2, 1, 4, 5, 6, 7];

   function checkCharacterAnalysis() {
       const analysis = document.getElementById("characterAnalysis").value.trim();
       const feedback = document.getElementById("analysisFeedback");
       // Basic feedback for character analysis (customize as needed)
       if (analysis.length > 0) {
           feedback.textContent = "Great job on your character analysis! Make sure to include motivations and impacts.";
           feedback.style.color = "green";
       } else {
           feedback.textContent = "Please write something for your analysis.";
           feedback.style.color = "red";
       }
   }

   function checkSequence() {
       let correctCount = 0;
       for (let i = 1; i <= correctOrder.length; i++) {
           const userAnswer = document.getElementById("event" + i).value.trim();
           const correctAnswer = correctOrder[i - 1];
           const inputBox = document.getElementById("event" + i);
           if (userAnswer === correctAnswer.toString()) {
               inputBox.style.color = "green";
               inputBox.style.fontWeight = "bold";
               correctCount++;
           } else {
               inputBox.style.color = "red";
               inputBox.style.fontWeight = "bold";
           }
       }
       const sequenceFeedback = document.getElementById("sequenceFeedback");
       sequenceFeedback.textContent = `You got ${correctCount} out of ${correctOrder.length} correct!`;
       sequenceFeedback.style.color = correctCount === correctOrder.length ? "green" : "red";
   }
  // Task 1: Check answers
  function checkTask1() {
    const answers = [
        "Sarah said that she was going to the cinema that night.",
        "Tom asked if I would help him with his homework.",
        "Lucy said that she had finished her project.",
        "Mark said that he had been playing football when it started to rain.",
        "Emma said that she couldn’t find her keys."
    ];
    
    let results = "";
    for (let i = 0; i < answers.length; i++) {
        const userAnswer = document.getElementById(`answer${i + 1}`).value.trim();
        if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
            results += `<div class="result">Question ${i + 1}: Correct!</div>`;
        } else {
            results += `<div class="incorrect">Question ${i + 1}: Incorrect! Your answer: "${userAnswer}". Correct answer: "${answers[i]}".</div>`;
        }
    }
    document.getElementById("task1Results").innerHTML = results;
}

function checkTask2() {
    const correctAnswers = [
        "Alex asked if Jamie was coming to the game.",
        "Jamie said that he would be there.",
        "Jamie heard that the tickets were sold out."
    ];
    
    let results = "";
    for (let i = 0; i < correctAnswers.length; i++) {
        const userAnswer = document.getElementById(`dialogue${i + 1}`).value.trim();
        
        // Normalize the text: lower case and remove excess spaces
        const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        const normalizedCorrectAnswer = correctAnswers[i].toLowerCase().replace(/\s+/g, ' ');

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            results += `<div class="result">Conversion ${i + 1}: Correct!</div>`;
        } else {
            results += `<div class="incorrect">Conversion ${i + 1}: Incorrect! Your answer: "${userAnswer}". Correct answer: "${correctAnswers[i]}".</div>`;
        }
    }

    // Show the results
    document.getElementById("task2Resultss").innerHTML = results;
}

function submitCharacterAnalysis() {
    // Get the values of the input fields
    const motivations = document.getElementById("motivations").value.trim();
    const strategies = document.getElementById("strategies").value.trim();
    const strengths = document.getElementById("strengths").value.trim();
    const weaknesses = document.getElementById("weaknesses").value.trim();
    const legacy = document.getElementById("legacy").value.trim();

    // Check if any of the fields are empty
    if (!motivations || !strategies || !strengths || !weaknesses || !legacy) {
        document.getElementById("error").style.display = 'block';
        document.getElementById("error").innerHTML = "Please fill in all sections of the analysis.";
        document.getElementById("result").style.display = 'none';
    } else {
        // Hide the error message if all fields are filled
        document.getElementById("error").style.display = 'none';

        // Show the result with the user's answers
        let resultContent = `
            <h4>Your Analysis:</h4>
            <p><strong>Motivations:</strong> ${motivations}</p>
            <p><strong>Military Strategies:</strong> ${strategies}</p>
            <p><strong>Strengths:</strong> ${strengths}</p>
            <p><strong>Weaknesses:</strong> ${weaknesses}</p>
            <p><strong>Legacy:</strong> ${legacy}</p>
        `;
        document.getElementById("resultttt").innerHTML = resultContent;
        document.getElementById("resultttt").style.display = 'block';
    }
}
    
function checkBlanks() {
    const correctBlanks = {
        blank1: 'Britain',
        blank2: 'Russia',
        blank3: 'scorched earth',
        blank4: 'deserted',
        blank5: '10,000'
    };

    let feedback = "Your answers: <br>";
    let allCorrect = true;

    for (let blank in correctBlanks) {
        const answer = document.getElementById(blank).value.trim();
        if (answer.toLowerCase() === correctBlanks[blank].toLowerCase()) {
            feedback += `${blank}: Correct<br>`;
        } else {
            feedback += `${blank}: Incorrect (Correct answer: ${correctBlanks[blank]})<br>`;
            allCorrect = false;
        }
    }

    document.getElementById("feedbackTask2").innerHTML = feedback;
    document.getElementById("feedbackTask2").className = allCorrect ? "feedback correct" : "feedback incorrect";
}



function submitTask(textAreaId, feedbackId) {
    const textArea = document.getElementById(textAreaId);
    const feedbackDiv = document.getElementById(feedbackId);
    const userInput = textArea.value.trim();

    // Clear previous feedback
    feedbackDiv.textContent = '';

    // Check for empty input
    if (userInput.length < 150) {
        feedbackDiv.textContent = "Please write at least 100 words.";
        feedbackDiv.style.color = "red";
        return;
    }

    feedbackDiv.textContent = "Thank you for your submission! Your writing has been received.";
    feedbackDiv.style.color = "green";
}

function submitDiscussion() {
    const textArea = document.getElementById('discussionNotes');
    const feedbackDiv = document.getElementById('feedback');
    const text = textArea.value.trim();
    
    if (text === "") {
        feedbackDiv.innerHTML = "Please write your discussion points before submitting.";
        feedbackDiv.className = "feedback incorrect";
        return;
    }

    // Example logic for providing feedback based on speculative ideas
    // You can customize this logic further based on your needs
    let ideas = text.toLowerCase();
    let containsConditions = ideas.includes("if") || ideas.includes("would") || ideas.includes("could");

    if (containsConditions) {
        feedbackDiv.innerHTML = "Great job! Your discussion points include speculative thinking about the implications of Napoleon's potential victory.";
        feedbackDiv.className = "feedback correct";
    } else {
        feedbackDiv.innerHTML = "Try to include more speculative language, such as conditionals like 'if', 'would', or 'could'.";
        feedbackDiv.className = "feedback incorrect";
    }
}


