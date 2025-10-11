

// this is a function thatp has one task doing one thing at a time. 
function updateText() {
    document.getElementById("heading").innerHTML = "JavaSript is Awesome"


}




function playGame() {

    console.log("playGame function was called");0


    var dice1 = rollDie();

    //console.log("the first die roll is:" + die1);



    var dice2 = rollDie();

    // console.log("the second die roll is: " + die2);



    var sumdice = dice1 + dice2;

    //  console.log("the sum is: " + sumdice);
    // this is going to change the text when I chick this button. 
    document.getElementById("diceOneResult").textContent = "Dice 1 is: " + dice1;
    document.getElementById("diceTwoResult").textContent = "Dice 2 is: " + dice2;
    document.getElementById("AllResult").textContent = "Dice 1 is: " + sumdi;
    // making a variable with the word let
    let determination = "Winner!!"
    if (sumdice == 7 || sumdice == 11) {
        document.getElementById("gameResult").textContent = determination;
        console.log(determination);
    }
    else if (dice1 == dice2 && dice1 % 2 == 0) {
        document.getElementById("gameResult").textContent = determination;
        console.log("No matter what you win");

    }
    else {

        document.getElementById("gameResult").textContent = "You tied (you pushed)";

    }

}

function rollDie() {

    var dice = Math.random() * 6;

    return Math.ceil(dice);

}