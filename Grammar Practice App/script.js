let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let optionsHTML = "";

    q.options.forEach(option => {
        optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {

    if (selected === questions[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

loadQuestion();
