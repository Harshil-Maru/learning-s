let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

document.getElementById('start').onclick = function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
};

document.getElementById('stop').onclick = function() {
    clearInterval(timer);
    isRunning = false;
};

document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    document.getElementById('timer').textContent = formatTime(minutes, seconds);
};

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Time's up! Take a break!");
            minutes = 5; // Set break time to 5 minutes
            seconds = 0;
            timer = setInterval(updateTimer, 1000);
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    document.getElementById('timer').textContent = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}