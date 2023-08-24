let guess = document.getElementById("guess")
let btnCheck = document.getElementById("btnCheck")
let score = document.getElementById("score")
let message = document.getElementById("message")
let highscore = document.getElementById("highscore")
let btnAgain = document.getElementById("btnAgain")
let secretNumber = document.getElementById("secretNumber")

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber)

let scoreUser = 20
let highscoreUser = 0

score.innerHTML = scoreUser

function verificacao() {
    var numero = document.getElementById('guess').value;
    if (scoreUser < 1) {
        document.body.style.backgroundColor = "red"
        message.innerHTML = "LOOOSER!!";
        score.innerHTML = "GAME OVER"
        scoreUser = 0
        return
    }
    if (numero > 20 || numero < 1) {
        alert("Digite um numero entre 1 e 20.")
    } else if (numero < randomNumber) {
        message.innerHTML = "Too Loooow";
        scoreUser--
        score.innerHTML = scoreUser
    } else if (numero > randomNumber) {
        scoreUser--
        score.innerHTML = scoreUser
        message.innerHTML = "Too High";
    } else {
        message.innerHTML = "Acertô Miseravi";
        document.body.style.backgroundColor = "green"
        if (scoreUser > highscoreUser) {
            highscoreUser = scoreUser
            highscore.innerHTML = highscoreUser
        } else {
            highscore.innerHTML = highscoreUser
        }
        score.innerHTML = "YOU WIN!!"
        secretNumber.innerHTML = randomNumber
    }
}

function again() {
    scoreUser = 20
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score.innerHTML = scoreUser
    message.innerHTML = "Start guessing..."
    console.log(randomNumber)
    document.body.style.backgroundColor = "#222"
    guess.value = ""
    secretNumber.innerHTML = "?"
}


