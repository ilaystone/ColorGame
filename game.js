var squares = document.querySelectorAll(".square");
var answer = document.querySelector("#answer");
var isCorrect = document.querySelector("#isCorrect");
var newColors = document.querySelector("#reset");
var mod = document.querySelectorAll(".mod");
var h1 = document.querySelector("h1");
var selected;
var squaresCount;
var colors;
var selectedColor;

initGame();

for (let i = 0; i < mod.length; i++) {
    mod[i].addEventListener("click", function () {
        mod[0].classList.remove("selected");
        mod[1].classList.remove("selected");
        this.classList.add("selected");
        initGame();
    });
}

function initGame() {
    setGrid();
    // set the answer
    answer.textContent = selectedColor;
    isCorrect.textContent = "";
    for (let i = 0; i < colors.length; i++) {
        // set the color from the colors array
        squares[i].style.backgroundColor = colors[i];
        // set on click listener for the squares
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor == selectedColor) {
                isCorrect.textContent = "Correct!";
                setColor();
            } else {
                isCorrect.textContent = "WRONG !!!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function setColor() {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = selectedColor;
    }
    h1.style.background = selectedColor;
}

function setGrid() {
    selected = document.querySelector(".selected");
    if (selected.textContent == "Easy") {
        squaresCount = 3;
    }
    else {
        squaresCount = 6;
    }
    colors = generateColors();
    selectedColor = selectColor();
    resetDisplay();
}

function resetDisplay() {
    h1.style.background = "steelblue";
    for (let i = 0; i < 6; i++) {
        if (colors[i])
            squares[i].style.display = "block";
        else
            squares[i].style.display = "none";
    }
}

newColors.addEventListener("click", function () {
    colors = generateColors();
    selectedColor = selectColor();
    initGame();
});

function generateColors() {
    var arr = []
    for (let i = 0; i < squaresCount; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function selectColor() {
    return colors[Math.floor(Math.random() * squaresCount)];
}