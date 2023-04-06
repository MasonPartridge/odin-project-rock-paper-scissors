/*
1. Take player input
2. Generate computer input
3. Turn both inputs into numbers where the higher number beats the lower number apare from a special case where 0 beats 3 with the use of a list.
4. If both choices are the same tie
5. If player's choice is higher and computer's choice does not equal 0 or if player's choice equals 0 and the computer's choice is 0 the player wins
6. else player loses.
*/

const LISTOFCHOICES = ["ROCK", "PAPER", "SCISSORS"];
var resultDiv = document.getElementById('outcome-div');
var playerScore = 0;
var computerScore = 00;

function getRoundResults(playerSelectionNum, computerSelectionNum) {
    if (playerSelectionNum === computerSelectionNum){
        return "Tie! " + LISTOFCHOICES[playerSelectionNum] + " and " + LISTOFCHOICES[computerSelectionNum] + " are the same";
    }
    else if ((playerSelectionNum === 0 && computerSelectionNum === 2) 
            || ((playerSelectionNum > computerSelectionNum) && !(playerSelectionNum === 2 && computerSelectionNum === 0))){
        playerScore ++;
        return "You Win! " + LISTOFCHOICES[playerSelectionNum] + " beats " + LISTOFCHOICES[computerSelectionNum];
    }
    else {
        computerScore ++;
        return "You Lose! " + LISTOFCHOICES[computerSelectionNum] + " beats " + LISTOFCHOICES[playerSelectionNum];
    }
}

function checkIfValidInput(playerSelection) {
    let returnValue = false;
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    LISTOFCHOICES.forEach(element => {
        if (playerSelection === element) {
            returnValue = true;
        }
    })
    return returnValue;
}

function getComputerChoice () {
    return Math.floor(Math.random() * 3); 
}

function playRound (playerSelection) {
    resultDiv.innerHTML = getRoundResults(playerSelection, getComputerChoice()) + "(score : " + playerScore + " | " + computerScore;
}

var rockButton = document.getElementById('rock-button');
rockButton.addEventListener("click", function() {
    playRound(0);
})
    
var paperButton = document.getElementById('paper-button');      
paperButton.addEventListener("click", function() {
    playRound(1);
})
    
var scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener("click", function() {
    playRound(2);
})