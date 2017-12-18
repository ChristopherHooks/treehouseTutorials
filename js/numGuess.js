//Generate random number between two integers and guess the number
 var correctGuess = false;
 var min = parseInt( prompt("Enter a minimum value") );

 var max = parseInt( prompt("Enter a max value"));
 var answer = Math.floor(Math.random() * (max - min) + min);

 var guess = prompt("Guess the number.");

 if(parseInt(guess) === answer){
    correctGuess = true;
}

 if ( guess < answer) {
    var guessMore= parseInt(prompt(' The answer is more than your guess. Guess again'));
        if( guessMore === answer) {
            correctGuess = true;
        }
        }else if (guess > answer){
    var guessLess = parseInt(prompt(" The answer is less than that. Guess again"));
    if(guessLess === answer){
        correctGuess = true;
    }
}

 if(correctGuess) {
    document.write('<p>You guessed the number!</p>');

}else {
document.write("Sorry. The answer was " + answer + ". ");
}
