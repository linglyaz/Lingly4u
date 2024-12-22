
    const correctAnswers = {
        "Reference Works": ["Encyclopaedia", "Atlas", "Almanac", "Road map", "World atlas"],
        "Fiction": ["Adventure stories", "Science fiction novel", "Myth", "Legend", "Tale"],
        "Non-Fiction": ["Biography", "Autobiography", "Periodicals", "History textbook", "Scientific journal"]
    };

    function checkAnswers() {
        checkCategory("reference-works", "Reference Works", "result-reference");
        checkCategory("fiction", "Fiction", "result-fiction");
        checkCategory("non-fiction", "Non-Fiction", "result-nonfiction");
    }

    function checkCategory(textareaId, categoryName, resultId) {
        const userAnswers = document.getElementById(textareaId).value.split(",").map(item => item.trim());
        const correctCategory = correctAnswers[categoryName];
        const resultDiv = document.getElementById(resultId);
        let allCorrect = true;

        userAnswers.forEach(answer => {
            if (!correctCategory.includes(answer)) {
                allCorrect = false;
            }
        });

        if (allCorrect && userAnswers.length === correctCategory.length) {
            resultDiv.innerHTML = "All answers are correct!";
            resultDiv.className = "result correct";
        } else {
            resultDiv.innerHTML = "Some answers are incorrect. Check again.";
            resultDiv.className = "result incorrect";
        }
    }

    function checkFillintheBlankAnswers() {
        const answers = [
            { id: "answer1", correct: "atlas" },
            { id: "answer2", correct: "fiction" },
            { id: "answer3", correct: "almanac" },
            { id: "answer4", correct: "non-fiction" },
            { id: "answer5", correct: "periodicals" },
            { id: "answer6", correct: "encyclopaedia" },
            { id: "answer7", correct: "relief" },
            { id: "answer8", correct: "non-fiction" }
        ];

        answers.forEach(answer => {
            const input = document.getElementById(answer.id);
            const userAnswer = input.value.trim().toLowerCase();

            if (userAnswer === answer.correct) {
                input.classList.remove("incorrect");
                input.classList.add("correct");
            } else {
                input.classList.remove("correct");
                input.classList.add("incorrect");
            }
        });
    }


    function checkGrammarAnswers() {
        // It-Cleft Answers
        const itcleftAnswers = [
            "It was Lisa who baked the cake.",
            "It was at the park that we met.",
            "It was the movie that started at 7:00 PM.",
            "It was the presentation that he delivered yesterday.",
            "It is this restaurant that has the best coffee in town."
        ];

        // Wh-Cleft Answers
        const whcleftAnswers = [
            "What I enjoy is learning new languages.",
            "What he borrowed was my favorite book.",
            "What they hired last week was a new manager.",
            "What we need is to focus on our main goals.",
            "What I admire is her dedication to her work."
        ];

        let correct = true;

        // Check It-Cleft Answers
        for (let i = 0; i < itcleftAnswers.length; i++) {
            const userAnswer = document.getElementById('itcleft' + (i + 1)).value.trim();
            if (userAnswer !== itcleftAnswers[i]) {
                document.getElementById('itcleft' + (i + 1)).style.backgroundColor = '#f8d7da';
                correct = false;
            } else {
                document.getElementById('itcleft' + (i + 1)).style.backgroundColor = '#d4edda';
            }
        }

        // Check Wh-Cleft Answers
        for (let i = 0; i < whcleftAnswers.length; i++) {
            const userAnswer = document.getElementById('whcleft' + (i + 1)).value.trim();
            if (userAnswer !== whcleftAnswers[i]) {
                document.getElementById('whcleft' + (i + 1)).style.backgroundColor = '#f8d7da';
                correct = false;
            } else {
                document.getElementById('whcleft' + (i + 1)).style.backgroundColor = '#d4edda';
            }
        }

        // Show Feedback
        if (correct) {
            document.getElementById('correctFeedback').style.display = 'block';
            document.getElementById('incorrectFeedback').style.display = 'none';
        } else {
            document.getElementById('incorrectFeedback').style.display = 'block';
            document.getElementById('correctFeedback').style.display = 'none';
        }
    }





    function checkListening1Answers() {
        const correctAnswers = {
          q1: "false",
          q2: "true",
          q3: "false",
          q4: "false",
          q5: "true",
          q6: "false"
        };
    
        const form = document.getElementById("trueFalseForm");
        let allCorrect = true;
    
        // Loop through each question
        for (const [key, value] of Object.entries(correctAnswers)) {
          const radios = form.querySelectorAll(`input[name="${key}"]`);
          let answeredCorrectly = false;
    
          // Check the selected radio button for this question
          radios.forEach((radio) => {
            if (radio.checked) {
              if (radio.value === value) {
                radio.parentElement.style.color = "green";
                answeredCorrectly = true;
              } else {
                radio.parentElement.style.color = "red";
              }
            } else {
              // Reset color for unselected options
              radio.parentElement.style.color = "black";
            }
          });
    
          if (!answeredCorrectly) {
            allCorrect = false;
          }
        }
    
        // Display result
        const result = document.getElementById("result");
        if (allCorrect) {
          result.textContent = "All answers are correct!";
          result.style.color = "green";
        } else {
          result.textContent = "Some answers are incorrect. Please try again!";
          result.style.color = "red";
        }
      }




      function checkMatchingAnswers() {
        const correctAnswers = {
          q1: "Atlas",
          q2: "Encyclopaedia",
          q3: "Fiction",
          q4: "Periodicals",
          q5: "Biography"
        };
    
        const form = document.getElementById("matchingForm");
        let allCorrect = true;
    
        for (const [key, correctAnswer] of Object.entries(correctAnswers)) {
          const select = form.querySelector(`select[name="${key}"]`);
          const selectedValue = select.value;
    
          if (selectedValue === correctAnswer) {
            select.style.color = "green";
          } else {
            select.style.color = "red";
            allCorrect = false;
          }
        }
    
        const result = document.getElementById("result");
        if (allCorrect) {
          result.textContent = "All answers are correct!";
          result.style.color = "green";
        } else {
          result.textContent = "Some answers are incorrect. Please try again!";
          result.style.color = "red";
        }
      }




      