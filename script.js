var sequence = [];
var userSequence = [];
var level = 1;
var colors = ["red", "green", "blue", "yellow"];
const levelElement = document.getElementById("level");

function startGame() {
    sequence = [];
    userSequence = [];
    level = 1;
    levelElement.textContent = level;
    nextLevel();
}

function nextLevel() {
    userSequence = [];
    levelElement.style.color = `rgb(${level * 2},0,0)`;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
    showSequence();
}

function showSequence() {
    let index = 0;
    const interval = setInterval(() => {
        if (index >= sequence.length) {
            clearInterval(interval);
            return;
        }
    const colorElement = document.getElementById(sequence[index]);
    colorElement.classList.add("active");
    setTimeout(() => {
        colorElement.classList.remove("active");
    }, 500);
    index++;
    }, 1000);
}

function handleColorClick(color) {
    userSequence.push(color);
    const colorElement = document.getElementById(color);
    const currentIndex = userSequence.length - 1;
    colorElement.classList.add("active");
    setTimeout(() => {
        colorElement.classList.remove("active");
    }, 500);
    if (userSequence[currentIndex] !== sequence[currentIndex]) {
        alert("Game Over! Try again.");
        startGame();
        return;
    }
    if (userSequence.length === sequence.length) {
        level++;
        levelElement.textContent = level;
        setTimeout(nextLevel, 1000);
    }
}

document.querySelectorAll(".color").forEach(colorElement => {
    colorElement.addEventListener("click", () => {
        handleColorClick(colorElement.id);
    });
});

document.getElementById("start").addEventListener("click", startGame);