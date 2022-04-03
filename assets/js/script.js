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
    var answerA = document.createElement("button");
    var answerB = document.createElement("button");
    var answerC = document.createElement("button");
    var answerD = document.createElement("button");

    question.textContent = quizQuestions[0].question;
    answerA.textContent = quizQuestions[0].answers["a"];
    answerB.textContent = quizQuestions[0].answers["b"];
    answerC.textContent = quizQuestions[0].answers["c"];
    answerD.textContent = quizQuestions[0].answers["d"];

    $(answerA).addClass("btn btn-primary m-3");
    $(answerB).addClass("btn btn-primary m-3");
    $(answerC).addClass("btn btn-primary m-3");
    $(answerD).addClass("btn btn-primary m-3");

    $(answerA).attr("id", "a");
    $(answerB).attr("id", "b");
    $(answerC).attr("id", "c");
    $(answerD).attr("id", "d");

    answerList.appendChild(answerA);
    answerList.appendChild(answerB);
    answerList.appendChild(answerC);
    answerList.appendChild(answerD);

    quizContainer.appendChild(question);
    quizContainer.appendChild(answerList);

    $("#a").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
        }

        else {
            console.log("You are wrong!");
        }
    });
    $("#b").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
        }

        else {
            console.log("You are wrong!");
        }
    });
    $("#c").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
        }

        else {
            console.log("You are wrong!");
        }
    });
    $("#d").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
        }

        else {
            console.log("You are wrong!");
        }
    });
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