const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];

function Game(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    

    const getResult = (playerChoice, computerChoice) =>
        // when both parties choice the same 
        playerChoice === computerChoice ? "IT'S A TIE ! 😦" :
        // choices player wins in
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
        ? "YOU WIN ! 😄" 
        // when it's not a tie and not a win
        : "YOU LOSE! 😢";

    const result = getResult(playerChoice, computerChoice);
    
    resultDisplay.textContent = result;

    if (playerChoice === "Scissors"){
        playerDisplay.textContent = 'PLAYER : ✂️';
    }else if( playerChoice === "Rock"){
        playerDisplay.textContent = 'PLAYER : 👊'
    }else{playerDisplay.textContent = 'PLAYER : 📜'}

    if (computerChoice === "Scissors"){
        computerDisplay.textContent = 'PLAYER : ✂️';
    }else if( computerChoice === "Rock"){
        computerDisplay.textContent = 'PLAYER : 👊'
    }else{computerDisplay.textContent = 'PLAYER : 📜'}


    resultDisplay.style.backgroundColor =
    result === "IT'S A TIE ! 😦" ? "blue" :
    result === "YOU WIN ! 😄" ? "green" :
    "red";

    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
}