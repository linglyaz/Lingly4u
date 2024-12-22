function toggleTranslation(card) {
    const translation = card.querySelector(".translation");
    translation.style.display = translation.style.display === "none" || translation.style.display === "" ? "block" : "none";
}
const answers = [
    "academics", "to gain", "experience", "particular", "attractive",
    "grade", "relationship", "to increase", "tolerance", "mutual",
    "confidence", "environment", "considerable"
];

function checkAnswers() {
    for (let i = 1; i <= answers.length; i++) {
        const input = document.getElementById(`input${i}`);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = answers[i - 1].toLowerCase();

        if (userAnswer === correctAnswer) {
            input.parentElement.classList.add("correct");
            input.parentElement.classList.remove("incorrect");
        } else {
            input.parentElement.classList.add("incorrect");
            input.parentElement.classList.remove("correct");
        }
    }
}
function checkmatching() {
    // Define the correct answers
    const correctAnswers = {
        select1: "f", // Social relationships -> Skills for connecting with others
        select2: "d", // School clubs -> Group that organizes sports, debate, and other activities
        select3: "e", // Mutual respect -> Understanding and valuing each other
        select4: "a", // Formal education -> Place where students develop knowledge and skills
        select5: "b", // Cultural activities -> Allows students to show talents outside academics
        select6: "c"  // School environment -> Main social space after home
    };

    // Get all pairs
    const pairs = document.querySelectorAll('.pair');
    
    pairs.forEach(pair => {
        const selectBox = pair.querySelector('select');
        const selectedValue = selectBox.value;
        const correctValue = correctAnswers[selectBox.id];
        
        // Remove existing classes
        pair.classList.remove('correct', 'incorrect');

        if (selectedValue === correctValue) {
            pair.classList.add('correct'); // Add correct class if the answer matches
        } else {
            pair.classList.add('incorrect'); // Add incorrect class if the answer is wrong
        }
    });
}

function ReflectionExercise() {
    const responses = [
        { id: "response1", keywords: ["confidence", "friends", "meaningful"] },
        { id: "response2", keywords: ["tolerance", "respect", "practice"] },
        { id: "response3", keywords: ["involved", "interest", "encourage"] }
    ];

    responses.forEach(response => {
        const textArea = document.getElementById(response.id);
        const text = textArea.value.toLowerCase();
        const hasKeywords = response.keywords.every(keyword => text.includes(keyword));

        if (hasKeywords) {
            textArea.classList.add("correct");
            textArea.classList.remove("incorrect");
        } else {
            textArea.classList.add("incorrect");
            textArea.classList.remove("correct");
        }
    });
}



function FillintheBlanksss() {
    // Correct answers
    const correctAnswers = {
        response11: "who",  // First input field answer
        response22: "who",  // Second input field answer
        response33: "where" // Third input field answer
    };

    // Loop through each response field and check the answer
    for (let i = 1; i <= 3; i++) {
        const response = document.getElementById(`response${i}1`); // Get the input field by ID
        const userAnswer = response.value.trim().toLowerCase(); // Get and sanitize input (removes extra spaces and makes it lowercase)

        // Check if the answer is correct
        if (userAnswer === correctAnswers[`response${i}1`].toLowerCase()) {
            response.style.backgroundColor = "#c8e6c9"; // Green for correct
        } else {
            response.style.backgroundColor = "#ffcccb"; // Red for incorrect
        }
    }
}




function checkAnswers2() {
    const answers2 = [
        { id: "combine1", correctAnswer: "The girl who is wearing a blue dress is my cousin." },
        { id: "combine2", correctAnswer: "I have a friend whose father is a famous musician." },
        { id: "combine3", correctAnswer: "My aunt, who lives in New York, is a wonderful cook." }
    ];

    answers2.forEach(answer => {
        const input = document.getElementById(answer.id);
        if (input.value.trim().toLowerCase() === answer.correctAnswer.toLowerCase()) {
            input.classList.add("correct");
            input.classList.remove("incorrect");
        } else {
            input.classList.add("incorrect");
            input.classList.remove("correct");
        }
    });
}




function highlightExamples() {
    // Highlight defining examples
    document.getElementById("defining-example1").style.backgroundColor = "#ffeb3b"; // Yellow highlight
    document.getElementById("defining-example2").style.backgroundColor = "#ffeb3b"; // Yellow highlight

    // Highlight non-defining examples
    document.getElementById("non-defining-example1").style.backgroundColor = "#ffeb3b"; // Yellow highlight
    document.getElementById("non-defining-example2").style.backgroundColor = "#ffeb3b"; // Yellow highlight
}

function resetExamples() {
    // Reset highlights
    document.getElementById("defining-example1").style.backgroundColor = "";
    document.getElementById("defining-example2").style.backgroundColor = "";
    document.getElementById("non-defining-example1").style.backgroundColor = "";
    document.getElementById("non-defining-example2").style.backgroundColor = "";
}



function checkAnswerss() {
    // Correct answers mapping
    const correctAnswers = {
        p1: "true",  // Answer for Q1 is True
        q2: "false", // Answer for Q2 is False
        q3: "true",  // Answer for Q3 is True
        q4: "false", // Answer for Q4 is False
        q5: "false"  // Answer for Q5 is False
    };

    // Loop through each question and check the selected answer
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        // Get the answer element (True or False for each question)
        const questionDiv = document.querySelector(`.question:nth-child(${i})`);

        // Check if the selected answer matches the correct answer
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[`q${i}`]) {
                questionDiv.classList.add("correct");
                questionDiv.classList.remove("incorrect");
            } else {
                questionDiv.classList.add("incorrect");
                questionDiv.classList.remove("correct");
            }
        } else {
            // If no answer was selected, remove any previous color
            questionDiv.classList.remove("correct", "incorrect");
        }
    }
}






function checkTask2() {
    const answers = {
        task2_1: 'social',
        task2_2: 'successful',
        task2_3: 'social',
        task2_4: 'variety',
        task2_5: 'individual'
    };

    let allCorrect = true;

    for (let id in answers) {
        const input = document.getElementById(id);
        const correctAnswer = answers[id];

        if (input.value.toLowerCase().trim() === correctAnswer.toLowerCase()) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
            allCorrect = false;
        }
    }

    if (allCorrect) {
        alert('Great job! All answers are correct.');
    } else {
        alert('Please check your answers and try again.');
    }
}
function checkAnswer(taskNumber) {
    var answer;
    var resultDiv;
    
    if (taskNumber === 1) {
        answer = document.getElementById("task1").value;
        resultDiv = document.getElementById("result1");
    } else if (taskNumber === 2) {
        answer = document.getElementById("task2").value;
        resultDiv = document.getElementById("result2");
    }
    
    // Validate if the answer is long enough
    if (answer.trim().length < 50) {
        resultDiv.innerHTML = "Your answer seems too short. Please provide more detail.";
        resultDiv.className = "result incorrect";
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = "Your answer has been submitted. Please review it!";
        resultDiv.className = "result correct";
        resultDiv.style.display = "block";
    }
}
function submitReflection() {
    const reflectionText = document.getElementById("reflectionInput").value.trim();
    const resultMessage = document.getElementById("resultMessage");

    if (reflectionText.length < 30) {
        resultMessage.innerHTML = "Your response is too short. Please add more detail.";
        resultMessage.className = "result-message incorrect";
        resultMessage.style.display = "block";
    } else {
        resultMessage.innerHTML = "Thank you for sharing your reflection!";
        resultMessage.className = "result-message correct";
        resultMessage.style.display = "block";
    }
}