//Declare variables
var upper = 10;
var randomNumber = getRandomNumber( upper );
var guess;
var attempts = 0;

//Define random number generator
function getRandomNumber( upper) {
    return Math.floor( Math.random() * upper ) + 1;

}

while ( guess !== randomNumber){
    guess = getRandomNumber( upper );
    attempts ++;
}

alert("The random number was: " + randomNumber + ". It took the computer " + attempts + " to guess the number.");
