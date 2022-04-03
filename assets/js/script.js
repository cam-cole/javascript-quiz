var timerEl = document.getElementById('timer');
var timeLeft = 60;
var quizContainer = document.getElementById('quiz-container')
var resultContainer = document.getElementById('result-container')
var answerCorrect = document.createElement("h2");
var answerIncorrect = document.createElement("h2");
let currentQuestion = 0;

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
},
{
    question: "Arrays in JavaScript can be used to store _________.",
    answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above"
    },
    correctAnswer: "d"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console logs"
    },
    correctAnswer: "d"
},
{
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "sqaure brackets"
    },
    correctAnswer: "c"
},
{
    question: "Inside which HTML element do we put the JavaScript file?",
    answers: {
        a: "<script>",
        b: "<js>",
        c: "./assets/script.js",
        d: "<scripting>"
    },
    correctAnswer: "a"
},
{
    question: "How does a FOR loop start?",
    answers: {
        a: "for(i<=5; i++)",
        b: "for(i=0; i<=5; i++)",
        c: "for i = 1 to 5",
        d: "for (i=0; i<=5)"
    },
    correctAnswer: "b"
},
{
    question: "JavaScript is the same as Java.",
    answers: {
        a: "True",
        b: "Maybe?",
        c: "Depends on my mood.",
        d: "False"
    },
    correctAnswer: "d"
},
{
    question: "How do you declare a variable in JavaScript?",
    answers: {
        a: "coffeeFlavor = 'Hazelnut'",
        b: "coffeeFlavor == 'Hazelnut'",
        c: "var coffeeFlavor = 'Hazelnut'",
        d: "v coffeeFlavor = 'Hazelnut'"
    },
    correctAnswer: "c"
},
{
    question: "Is JavaScript case sensitive?",
    answers: {
        a: "Yes",
        b: "Sometimes",
        c: "No",
        d: "I don't know, maybe I should ask them."
    },
    correctAnswer: "a"
}
]

// function to build quiz
function showQuestion(questionNumber) {
    quizContainer.textContent = "";
    var question = document.createElement("h1");
    var answerList = document.createElement("ol");
    var answerA = document.createElement("button");
    var answerB = document.createElement("button");
    var answerC = document.createElement("button");
    var answerD = document.createElement("button");

    question.textContent = quizQuestions[questionNumber].question;
    answerA.textContent = quizQuestions[questionNumber].answers["a"];
    answerB.textContent = quizQuestions[questionNumber].answers["b"];
    answerC.textContent = quizQuestions[questionNumber].answers["c"];
    answerD.textContent = quizQuestions[questionNumber].answers["d"];

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

    checkAnswer(currentQuestion);
}

function checkAnswer(questionNumber) {
    $("#a").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[questionNumber].correctAnswer) {
            console.log("You are right!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerCorrect);
            currentQuestion++;
            showQuestion(currentQuestion);
        }

        else {
            console.log("You are wrong!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    $("#b").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[questionNumber].correctAnswer) {
            console.log("You are right!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerCorrect);
            currentQuestion++;
            showQuestion(currentQuestion);
        }

        else {
            console.log("You are wrong!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    $("#c").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[questionNumber].correctAnswer) {
            console.log("You are right!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerCorrect);
            currentQuestion++;
            showQuestion(currentQuestion);
        }

        else {
            console.log("You are wrong!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    $("#d").on("click", function() {
        console.log(this.id);
        if(this.id === quizQuestions[questionNumber].correctAnswer) {
            console.log("You are right!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerCorrect);
            currentQuestion++;
            showQuestion(currentQuestion);
        }

        else {
            console.log("You are wrong!");
            resultContainer.textContent = "";
            resultContainer.appendChild(answerIncorrect);
            timeLeft = timeLeft - 10;
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });
}

// Timer function for the quiz
function countdown() {
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
$("#start").on("click", function(){
    showQuestion(currentQuestion)});