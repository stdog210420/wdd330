const count = document.getElementById("countdown");
const start = document.getElementById("startButton");
const pause = document.getElementById("pauseButton");
const resume = document.getElementById("resumeButton");
const startTimeInput = document.getElementById('start-time');

// Set the starting time (e.g., 10 seconds)
let timeLeft = 0;
let countdownInterval;
let isPaused = false;

// Add an event listener to the "Start" button
start.addEventListener('click', function () {
    // Get the starting time from the input field
    timeLeft = parseInt(startTimeInput.value);

    // Check if the input is valid
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid starting time.");
        return;
    }

    // Display the starting time on the countdown
    count.textContent = timeLeft;
    isPaused = false;

    // Disable the "Start" button and enable the "Pause" button
    start.disabled = true;
    pause.disabled = false;
    resume.disabled = true;

    // Start the countdown using setInterval
    countdownInterval = setInterval(function () {
        if (!isPaused) {
            timeLeft--;
            count.textContent = timeLeft;

            // Stop the countdown when time reaches 0
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                count.textContent = "Time's up!";
                start.disabled = false; // Enable the Start button again
                pause.disabled = true;
                resume.disabled = true;
            }
        }
    }, 1000);
});

// Add an event listener to the "Pause" button
pause.addEventListener('click', function () {
    clearInterval(countdownInterval); // Stop the countdown
    isPaused = true; // Mark as paused
    pause.disabled = true; // Disable the Pause button
    resume.disabled = false; // Enable the Resume button
});

// Add an event listener to the "Resume" button
resume.addEventListener('click', function () {
    isPaused = false;
    // Restart the countdown with the current remaining time
    countdownInterval = setInterval(function () {
        if (!isPaused) {
            timeLeft--;
            count.textContent = timeLeft;

            // Stop the countdown when time reaches 0
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                count.textContent = "Time's up!";
                start.disabled = false; // Enable the Start button again
                pause.disabled = true;
                resume.disabled = true;
            }
        }
    }, 1000);

    // Disable the Resume button and enable the Pause button
    resume.disabled = true;
    pause.disabled = false;
});