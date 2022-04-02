var timerEl = document.getElementById('timer');
var quizContainer = document.getElementById('quiz-container')

// Quiz Questions
var quizQuestions = [
{
    question: "Commonly used data types DO NOT include:",
    answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
    correctAnswer: "c"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: {
        a: "commmas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses"
    },
    correctAnswer: "c"
}
]

// function to build quiz
function buildQuiz() {
    // variable to store HTML output
    var output = [];
    
    // for each question
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        var answers = []

        for(letter in currentQuestion.answers){
            answers.push(
                `<button class="btn btn-primary m-3">${letter}: ${currentQuestion.answers[letter]}</button>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div>${currentQuestion.question}</div>
            <div>${answers.join('')}</div>`
        );
    })

    quizContainer.innerHTML = output.join('');
}


// Timer function for the quiz
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "Time: 0";
            clearInterval(timeInterval)
        }
    }, 1000)
}

$("#start").on("click", countdown);
$("#start").on("click", buildQuiz);