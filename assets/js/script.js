var timerEl = document.getElementById('timer');
var quizContainer = document.getElementById('quiz-container')
var resultContainer = document.getElementById('result-container')

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
function startQuiz() {
    quizContainer.textContent = "";
    var question = document.createElement("h1");
    var answerList = document.createElement("ol");
    var answer1 = document.createElement("li");
    var answer2 = document.createElement("li");
    var answer3 = document.createElement("li");
    var answer4 = document.createElement("li");

    question.textContent = quizQuestions[0].question;
    answer1.innerHTML = "<btn id='a' class='btn btn-primary m-3'>" + quizQuestions[0].answers["a"] + "</btn>";
    answer2.innerHTML = "<btn id='b' class='btn btn-primary m-3'>" + quizQuestions[0].answers["b"] + "</btn>";
    answer3.innerHTML = "<btn id='c' class='btn btn-primary m-3'>" + quizQuestions[0].answers["c"] + "</btn>";
    answer4.innerHTML = "<btn id='d' class='btn btn-primary m-3'>" + quizQuestions[0].answers["d"] + "</btn>";

    answerList.appendChild(answer1);
    answerList.appendChild(answer2);
    answerList.appendChild(answer3);
    answerList.appendChild(answer4);

    quizContainer.appendChild(question);
    quizContainer.appendChild(answerList);

    $("answer1").on("click", console.log(this.id));
    
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
$("#start").on("click", startQuiz);