var timerEl = document.getElementById('timer');
var timeLeft = 60;
var quizContainer = document.getElementById('quiz-container')
var resultContainer = document.getElementById('result-container')
var answerCorrect = document.createElement("h2");
var answerIncorrect = document.createElement("h2");

answerCorrect.textContent = "Correct!";
answerIncorrect.textContent = "Incorrect. You lost 10 seconds";

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

    // JQuery events to check for right answer
    $("#a").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
            resultContainer.appendChild(answerCorrect);
        }

        else {
            console.log("You are wrong!");
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
        }
    });
    $("#b").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
            resultContainer.appendChild(answerCorrect);
        }

        else {
            console.log("You are wrong!");
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
        }
    });
    $("#c").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
            resultContainer.appendChild(answerCorrect);
        }

        else {
            console.log("You are wrong!");
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
        }
    });
    $("#d").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[0].correctAnswer) {
            console.log("You are right!");
            resultContainer.appendChild(answerCorrect);
        }

        else {
            console.log("You are wrong!");
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
        }
    });
}

// Timer function for the quiz
function countdown() {
    // var timeLeft = 60;

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