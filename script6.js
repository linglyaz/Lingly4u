function toggleTranslation(card) {
    const translation = card.querySelector('.translation');
    if (translation.style.display === 'none' || translation.style.display === '') {
        translation.style.display = 'block';
    } else {
        translation.style.display = 'none';
    }
}
    function checkTrueFalse() {
        const answers = [false, true, false, false, false];
        for (let i = 0; i < answers.length; i++) {
            const userAnswer = document.querySelector(`input[name="q${i + 1}"]:checked`);
            const resultSpan = document.getElementById(`result${i + 1}`);
            if (userAnswer) {
                if (userAnswer.value === answers[i].toString()) {
                    resultSpan.innerText = "Correct!";
                    resultSpan.className = "result correct";
                } else {
                    resultSpan.innerText = "Incorrect. The correct answer is: " + answers[i];
                    resultSpan.className = "result incorrect";
                }
            } else {
                resultSpan.innerText = "Please select an answer.";
                resultSpan.className = "result incorrect";
            }
        }
    }

    function checkShortAnswers() {
        const correctAnswers = [
            "Nuclear fission is the splitting of an atomic nucleus.",
            "Control rods absorb neutrons to regulate the fission process.",
            "One major consequence was the evacuation of surrounding areas.",
            "Nuclear waste can remain dangerous for thousands of years.",
            "Some believe we should reduce nuclear energy; others see it as essential."
        ];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`answer${i + 1}`).value.trim();
            const resultSpan = document.getElementById(`shortResult${i + 1}`);
            if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = "Incorrect. The correct answer is: " + correctAnswers[i];
                resultSpan.className = "result incorrect";
            }
        }
    }

    function checkMatching() {
        const correctAnswers = ["a", "d", "c", "b", "e"];
        const results = [];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`match${i + 1}`).value.toLowerCase();
            if (userAnswer === correctAnswers[i]) {
                results.push(`1.${i + 1}: Correct!`);
            } else {
                results.push(`1.${i + 1}: Incorrect. The correct answer is ${correctAnswers[i]}.`);
            }
        }
        document.getElementById('matchingResults').innerHTML = results.join('<br>');
    }

    function checkFillInTheBlanks() {
        const correctAnswers = ["nucleus", "radioactive", "split", "absorb", "disastrous"];
        const results = [];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`fill${i + 1}`).value.toLowerCase();
            const resultSpan = document.getElementById(`fillResult${i + 1}`);
            if (userAnswer === correctAnswers[i]) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = "Incorrect. The correct answer is: " + correctAnswers[i];
                resultSpan.className = "result incorrect";
            }
        }
    }

    function checkModals() {
        const correctAnswers = ["should", "might", "could", "must", "should"];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`modal${i + 1}`).value.toLowerCase();
            const resultSpan = document.getElementById(`modalResult${i + 1}`);
            if (userAnswer === correctAnswers[i]) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = "Incorrect. The correct answer is: " + correctAnswers[i];
                resultSpan.className = "result incorrect";
            }
        }
    }
    function checkModalTransform() {
        const correctAnswers = [
            "You must attend the meeting.",
            "It might rain tomorrow.",
            "You can borrow my book.",
            "You must not smoke here.",
            "You should study more."
        ];
        const results = [];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`modalTransform${i + 1}`).value.trim();
            if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
                results.push(`1.${i + 1}: Correct!`);
            } else {
                results.push(`1.${i + 1}: Incorrect. The correct answer is: "${correctAnswers[i]}".`);
            }
        }
        document.getElementById('modalTransformResults').innerHTML = results.join('<br>');
    }
    
    function checkListening() {
        const correctAnswers = [
            "Uranium",
            "It involves splitting the nucleus of an atom.",
            "Boron or cadmium",
            "Health issues and displacement of people",
            "Some support it for energy; others oppose it due to safety concerns."
        ];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`listening${i + 1}`).value.trim();
            const resultSpan = document.getElementById(`listeningResult${i + 1}`);
            if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
                resultSpan.innerText = "Correct!";
                resultSpan.className = "result correct";
            } else {
                resultSpan.innerText = "Incorrect. The correct answer is: " + correctAnswers[i];
                resultSpan.className = "result incorrect";
            }
        }
    }
    function checkListeningTask2() {
        const correctAnswers = [
            "Energy stored in the nucleus of atoms.",
            "Cadmium or boron.",
            "Increased radiation; health issues; displacement of people.",
            "It could provide electricity for a long time; it has risks.",
            "It can remain dangerous for thousands of years."
        ];
        const results = [];
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = document.getElementById(`listeningTask2Answer${i + 1}`).value.trim();
            if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
                results.push(`1.${i + 1}: Correct!`);
            } else {
                results.push(`1.${i + 1}: Incorrect. The correct answer is: "${correctAnswers[i]}".`);
            }
        }
        document.getElementById('listeningTask2Results').innerHTML = results.join('<br>');
    }
    
    