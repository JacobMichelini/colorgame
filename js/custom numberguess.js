// alert("JS Linked");

//create secretNumber
var secretNumber = 4;

//Get Guess
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess)

//Check
if (guess === secretNumber) {
	alert("you got it");
}

else if (guess > secretNumber) {
	alert("too high, again");
}

else {
	alert("too low, again");
}

