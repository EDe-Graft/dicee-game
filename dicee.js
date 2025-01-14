//dice images
var diceImages = ["", "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

//welcome to game
alert("Welcome to the dicee game🎲. \nObjective is to roll a higher number. \nSo Refresh the page and cross your fingers👀🤞")


//function to "Roll Dice"
function rollDice() {
    //selecting random index
    var randomIndex1 = Math.floor(Math.random() * 6) + 1;
    var randomIndex2 = Math.floor(Math.random() * 6) + 1;

    //changing dice image
    document.querySelector(".img1").setAttribute("src", diceImages[randomIndex1])
    document.querySelector(".img2").setAttribute("src", diceImages[randomIndex2])

    //check winner
    if (randomIndex1 > randomIndex2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    
    else if (randomIndex2 > randomIndex1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    
    else {document.querySelector("h1").innerHTML = "Draw";}
}

//function to reset the game
function resetDice() {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");

    document.querySelector("h1").innerHTML = "Welcome to Dicee🎲"

}

//on start button click
document.querySelector(".start").addEventListener("click", rollDice);
//on reset button click
document.querySelector(".reset").addEventListener("click", resetDice);