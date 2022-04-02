var timerEl = document.getElementById('timer');

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