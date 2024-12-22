function checkReading1Answers() {
    // Define correct answers with explanations
    const correctAnswers = {
      statement1: {
        answer: 'false',
        explanation: 'The Declaration of Independence was signed in Philadelphia, not Washington, D.C.'
      },
      statement2: {
        answer: 'true',
        explanation: 'The Liberty Bell rang to announce the independence of the United States.'
      },
      statement3: {
        answer: 'false',
        explanation: 'Britain did not recognize the United States\' independence immediately after the Declaration. It was recognized in 1783 after the American colonists won the war.'
      },
      statement4: {
        answer: 'false',
        explanation: 'John Adams was the second president of the United States. George Washington was the first.'
      },
      statement5: {
        answer: 'true',
        explanation: 'Independence Day celebrations indeed include picnics, baseball games, contests, parades, and fireworks.'
      },
      statement6: {
        answer: 'false',
        explanation: 'John Adams believed Independence Day would be celebrated by future generations, not just by those who signed the Declaration.'
      },
      statement7: {
        answer: 'true',
        explanation: 'The cracked Liberty Bell is a symbol of the sacrifices made for American freedom, just as stress and strain can leave visible marks.'
      }
    };
  
    // Get all the statements and check if they are correct
    let resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = ''; // Clear previous results
    
    let allCorrect = true;
    for (const statement in correctAnswers) {
      const userAnswer = document.querySelector(`input[name="${statement}"]:checked`);
      
      if (userAnswer) {
        const answer = userAnswer.value;
        const correctAnswer = correctAnswers[statement].answer;
        const explanation = correctAnswers[statement].explanation;
  
        // Check if the answer is correct
        if (answer === correctAnswer) {
          userAnswer.parentElement.classList.add("correct");
          userAnswer.parentElement.classList.remove("incorrect");
        } else {
          userAnswer.parentElement.classList.add("incorrect");
          userAnswer.parentElement.classList.remove("correct");
          
          // Provide an explanation for incorrect answers
          const explanationText = document.createElement('p');
          explanationText.classList.add('explanation');
          explanationText.innerText = `Incorrect. Correct answer: ${correctAnswer}. ${explanation}`;
          resultDiv.appendChild(explanationText);
          
          allCorrect = false;
        }
      }
    }
  
    // Show message if all answers are correct
    if (allCorrect) {
      resultDiv.innerHTML = '<p>All answers are correct! Well done!</p>';
    }
  }
  


  function checkTimeline203() {
    const correctAnswers = {
      event1: {
        answer: ["The Declaration of Independence was signed in Philadelphia.", "Declaration of Independence signed in Philadelphia", "Declaration signed in 1776 in Philadelphia"],
        explanation: "In 1776, the Declaration of Independence was signed in Philadelphia, marking the birth of the United States."
      },
      event2: {
        answer: ["Britain recognized the United States' independence after the Treaty of Paris in 1783.", "Britain recognized independence in 1783", "Treaty of Paris in 1783 marked recognition of US independence"],
        explanation: "In 1783, Britain formally recognized the independence of the United States after the Treaty of Paris."
      },
      event3: {
        answer: ["John Adams predicted that Independence Day would be celebrated as a great anniversary festival by future generations.", "John Adams predicted future celebrations", "John Adams said Independence Day would be a great festival"],
        explanation: "John Adams accurately predicted that Independence Day would be celebrated as an important holiday."
      },
      event4: {
        answer: ["Americans celebrate Independence Day with picnics, parades, baseball games, fireworks, and more.", "Independence Day includes fireworks, picnics, parades", "Picnics, parades, baseball games, fireworks are celebrated on Independence Day"],
        explanation: "Independence Day celebrations today include parades, fireworks, and various forms of entertainment."
      }
    };
  
    let resultDiv = document.querySelector('#result1');
    resultDiv.innerHTML = ''; // Clear previous results
  
    let allCorrect = true;
    for (const event in correctAnswers) {
      const userAnswer = document.querySelector(`#${event}`).value.trim().toLowerCase();
      
      if (userAnswer) {
        const correctAnswersList = correctAnswers[event].answer.map(ans => ans.toLowerCase());
        const explanation = correctAnswers[event].explanation;
  
        let isCorrect = false;
        
        // Check if the user's answer matches any of the correct answers
        for (let correctAnswer of correctAnswersList) {
          if (userAnswer === correctAnswer || correctAnswer.includes(userAnswer)) {
            isCorrect = true;
            break;
          }
        }
  
        if (isCorrect) {
          document.querySelector(`#${event}`).classList.add("correct");
          document.querySelector(`#${event}`).classList.remove("incorrect");
        } else {
          document.querySelector(`#${event}`).classList.add("incorrect");
          document.querySelector(`#${event}`).classList.remove("correct");
  
          // Provide an explanation for incorrect answers
          const explanationText = document.createElement('p');
          explanationText.classList.add('explanation');
          explanationText.innerText = `Incorrect. Correct answer: ${correctAnswersList[0]}. ${explanation}`;
          resultDiv.appendChild(explanationText);
  
          allCorrect = false;
        }
      }
    }
  
    // Show message if all answers are correct
    if (allCorrect) {
      resultDiv.innerHTML = '<p>All events are in the correct order! Great job!</p>';
    }
  }




  function checkAnswersGrammar1() {
    // Define correct answers
    const correctAnswers = [
        "went", "decided", "arrived", "was", "walked", "saw", "got", "were", "had"
    ];

    // Get the user's inputs
    let userAnswers = [
        document.getElementById("gap1").value.trim(),
        document.getElementById("gap2").value.trim(),
        document.getElementById("gap3").value.trim(),
        document.getElementById("gap4").value.trim(),
        document.getElementById("gap5").value.trim(),
        document.getElementById("gap6").value.trim(),
        document.getElementById("gap7").value.trim(),
        document.getElementById("gap8").value.trim(),
        document.getElementById("gap9").value.trim(),
    ];

    // Check each answer
    for (let i = 0; i < correctAnswers.length; i++) {
        const gap = document.getElementById(`gap${i + 1}`);
        if (userAnswers[i] === correctAnswers[i]) {
            gap.classList.add("correct");
            gap.classList.remove("incorrect");
        } else {
            gap.classList.add("incorrect");
            gap.classList.remove("correct");
        }
    }

    
}



function checkGrAnswers1() {
    const answers = {
        q1: "ate",
        q2: "is studying",
        q3: "have traveled",
        q4: "visited",
        q5: "will finish",
        q6: "was running",
        q7: "will have moved",
        q8: "played"
    };
    
    // Check each answer
    for (let question in answers) {
        let userAnswer = document.getElementById(question).value.trim().toLowerCase();
        let correctAnswer = answers[question];
        
        if (userAnswer === correctAnswer) {
            document.getElementById(question).classList.add('correct');
            document.getElementById(question).classList.remove('incorrect');
        } else {
            document.getElementById(question).classList.add('incorrect');
            document.getElementById(question).classList.remove('correct');
        }
    }
}



function checkList1Answers() {
    const answers = [
      ["The Declaration of Independence", "A document stating the colonies' right to be free and independent from Britain"],
      ["1783", "After the American colonists won the war of independence"],
      ["Independence Hall", "Independence Hall in Philadelphia, Pennsylvania"],
      ["The struggle for freedom", "America's struggle for freedom"],
      ["It would be celebrated as a great anniversary festival by future generations"],
      ["Picnics, baseball games, pie-eating contests, parades, fireworks", "Various activities like parades, fireworks, and picnics"],
      ["Towns and cities in the U.S. and around the world"]
    ];
  
    for (let i = 1; i <= 7; i++) {
      const userAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
      const feedbackElement = document.getElementById(`q${i}-feedback`);
      if (answers[i - 1].some(answer => userAnswer.includes(answer.toLowerCase()))) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.className = "feedback correct";
      } else {
        feedbackElement.textContent = `Incorrect. Correct Answer: ${answers[i - 1][0]}`;
        feedbackElement.className = "feedback incorrect";
      }
    }
  }



 



function checkAnswerslissss() {
    const questions = document.querySelectorAll('.question11');
    let score = 0;
    questions.forEach((question) => {
      const correctAnswer = question.getAttribute('data-correct');
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
          question.classList.add('correct');
          question.classList.remove('incorrect');
          score++;
        } else {
          question.classList.add('incorrect');
          question.classList.remove('correct');
        }
      } else {
        question.classList.add('incorrect');
        question.classList.remove('correct');
      }
    });
    document.getElementById('resultppppp').textContent = `You scored ${score} out of ${questions.length}.`;
  }





  const userNameInput = document.getElementById('userName');
        const submitLink = document.getElementById('submitLink');

        userNameInput.addEventListener('input', function () {
            if (userNameInput.value.trim()) {
                submitLink.textContent = `Send your tasks, ${userNameInput.value}`;
            } else {
                submitLink.textContent = "Send your tasks";
            }
        });



        document.addEventListener("DOMContentLoaded", function() {
          // Check if the lesson is completed, and show the message
          if(localStorage.getItem("lesson1Completed") === "true") {
              const lesson1Message = document.querySelector("#lesson1 .completed-message");
              lesson1Message.style.display = "block"; // Show the message
          }
      
          // Example of a button to complete the lesson
          const completeLessonButton = document.getElementById("completeLesson1");
      
          completeLessonButton.addEventListener("click", function() {
              // Save completion status in localStorage
              localStorage.setItem("lesson1Completed", "true");
      
              // Show the completion message
              const lesson1Message = document.querySelector("#lesson1 .completed-message");
              lesson1Message.style.display = "block";
          });
      });
      