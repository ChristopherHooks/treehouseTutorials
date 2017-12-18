//Declare variables
var randomNumber = getRandomNumber( 10 );
var guess;
var attempts = 0;
var correctGuess = false;

//Define random number generator
function getRandomNumber( upper) {
    return Math.floor(Math.random() * upper) + 1;

}

do {
    guess = prompt( "Guess a number between 1 and 10");
    attempts ++;
    if( parseInt(guess) === randomNumber){
        correctGuess = true;
    }
} while ( ! correctGuess );

alert( "You got it! The number was " + randomNumber + ". It took you " + attempts + " tries.");
