// Set up the canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Initial state for face type (true for happy, false for frowny)
let isHappy = true;

// Function to draw a happy face
function drawHappyFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw the face (circle)
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // Draw the eyes (two small circles)
    ctx.beginPath();
    ctx.arc(200, 220, 15, 0, Math.PI * 2); // Left eye
    ctx.arc(300, 220, 15, 0, Math.PI * 2); // Right eye
    ctx.fillStyle = "black";
    ctx.fill();

    // Draw the smiling mouth (arc)
    ctx.beginPath();
    ctx.arc(250, 250, 60, 0, Math.PI);
    ctx.stroke();
}

// Function to draw a frowny face
function drawFrownyFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw the face (circle)
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // Draw the eyes (two small circles)
    ctx.beginPath();
    ctx.arc(200, 220, 15, 0, Math.PI * 2); // Left eye
    ctx.arc(300, 220, 15, 0, Math.PI * 2); // Right eye
    ctx.fillStyle = "black";
    ctx.fill();

    // Draw the frowning mouth (arc)
    ctx.beginPath();
    ctx.arc(250, 300, 60, Math.PI, 0); // Frown (upside down)
    ctx.stroke();
}

// Event listener for canvas click
canvas.addEventListener('click', function () {
    // Toggle between happy and frowny faces
    if (isHappy) {
        drawFrownyFace();
    } else {
        drawHappyFace();
    }
    isHappy = !isHappy; // Switch the state
});

// Initial drawing of a happy face
drawHappyFace();