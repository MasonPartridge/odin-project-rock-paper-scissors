/*
1. Take player input
2. Generate computer input
3. Turn both inputs into numbers where the higher number beats the lower number apare from a special case where 0 beats 3 with the use of a list.
4. If both choices are the same tie
5. If player's choice is higher and computer's choice does not equal 0 or if player's choice equals 0 and the computer's choice is 0 the player wins
6. else player loses.
*/

const LISTOFCHOICES = ["ROCK", "PAPER", "SCISSORS"]

function getRoundResults(playerSelectionNum, computerSelectionNum) {
    if (playerSelectionNum === computerSelectionNum){
        return "Tie! " + LISTOFCHOICES[playerSelectionNum] + " and " + LISTOFCHOICES[computerSelectionNum] + " are the same"
    }
    else if (playerSelectionNum === 0 && computerSelectionNum === 2 || playerSelectionNum > computerSelectionNum && computerSelectionNum != 0){
        return "You Win! " + LISTOFCHOICES[playerSelectionNum] + " beats " + LISTOFCHOICES[computerSelectionNum];
    }
    else {
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

function makeChoiceInputStringIntoNumber(selectionString) {
    for (var i = 0; i < LISTOFCHOICES.length; i++){
        if (selectionString === LISTOFCHOICES[i]) {
            return i;
        }
    }
}

function getComputerChoice () {
    return Math.floor(Math.random() * 3); 
}

function playRound () {
    let playerSelection = prompt("hay dwaddy! Wanna enter Rock, Paper, or Scissors pwease uvu");
    while (!checkIfValidInput(playerSelection)){
        playerSelection = prompt("Swory~ dwaddy but, that was not a valid input plwease enter Rock, Paper, or Scissors uwu");
    }
    console.log(getRoundResults(makeChoiceInputStringIntoNumber(playerSelection.toUpperCase()), getComputerChoice()));
}

function playFiveRounds() {
    for (var i = 0; i < 5; i++){
        playRound();
    }
}

playFiveRounds();