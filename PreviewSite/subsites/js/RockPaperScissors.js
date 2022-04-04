const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')
const highscoreDisplay = document.getElementById('highscore')
const possibleChoices = document.querySelectorAll('button')
const gameTrue = document.getElementById('game-true')
const gameFalse = document.getElementById('game-false')
const body = document.getElementById('body')
const guiMode = document.getElementById('gui-mode')

let userChoice
let computerChoice = -1;
let funMode = false;
let options = ["rock", "paper", "scissors"];
let score = 0;
let highscore = 0;

stop()
console.log((2 + 1)%3)
guiMode.innerHTML = "&#129370;"

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if (parseInt(e.target.id) in [0, 1, 2]) {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = options[userChoice]
        generateComputerChoice();
        getResult();
    }
}));

function generateComputerChoice() {
    if (!funMode) {
        computerChoice = Math.floor(Math.random() * 3);
    } else {
        computerChoice = (computerChoice + 1) % 3
    }
    computerChoiceDisplay.innerHTML = options[computerChoice];
}

function getResult() {
    checkArray = (computerChoice + 1) % 3
    if (computerChoice === parseInt(userChoice)) {
        result = "it's a draw"
    } else if (checkArray === parseInt(userChoice)) {
        result = 'you win!'
        score++;
    } else if (checkArray != parseInt(userChoice)) {
        result = 'you lost!'
        score--;
    }
    resultDisplay.innerHTML = result;
    scoreDisplay.innerHTML = score;
    checkScore()

}

function checkScore() {
    if (score >= 0) { scoreDisplay.style.color = 'green' }
    else { scoreDisplay.style.color = 'red' }
}

function stop() {
    gameTrue.style.display = "none";
    gameFalse.style.display = "block";
    if (highscore < score) { highscore = score; }
    highscoreDisplay.innerHTML = highscore;
    score = 0, userChoice = "", computerChoice = -1;
    userChoiceDisplay.innerHTML = ""
    computerChoiceDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
    scoreDisplay.innerHTML = 0;
    scoreDisplay.style.color = 'green'
}

function start() {
    gameTrue.style.display = "block";
    gameFalse.style.display = "none";
}
        
function changeFunMode() {
    if (funMode === false) { funMode = true} else {
        funMode = false
    }
}

function switchContrast() {
    if (body.style.backgroundColor === 'white') {
        guiMode.innerHTML = "&#129370;"
        body.style.backgroundColor = "black";
    } else { 
        body.style.backgroundColor = "white";
        guiMode.innerHTML = "&#127772;";
    }
}