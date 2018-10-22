var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var header = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
            reset()
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                resetButton.textContent = 'Play again';
                changeColors(clickedColor);
                header.style.background = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Wrong Answer!'
            }
        })
    }
}


function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New colors';
    messageDisplay.textContent = '';
    header.style.background = 'steelblue';
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}

resetButton.addEventListener('click', function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}
