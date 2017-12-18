//Create quiz
var quiz = [
    ['Who is Rick and ...', 'Morty'],
    ['The show is on ...', 'Adult Swim'],
    ['Wubba lubba ...', 'Dub Dub']
];

//Track correct answers
var correctAnswerCount = 0;

//Create list of Correct questions
var correctList = '<ol>';

//Create list of incorrect questions
var incorrectList = '<ol>';

//Iterate through quiz array
function askQuestion( list ) {
    for(var i = 0; i < list.length; i ++){

        //Set answer to index 0 of each array
        var answer = prompt(list[i][0]);

        //Compare response to index 1 of each array
        if( answer.toLowerCase() === list[i][1].toLowerCase() ){

            //Increment correct counter
            correctAnswerCount += 1;
            //Add question to correct list
            correctList += '<li>' + list[i][0] + '</li>';
        } else {
            //Add questions to incorrect list
            incorrectList += '<li>' + list[i][0] + '</li>';
        }
    }

    //Close ordered list
    correctList += '</ol>';
    incorrectList += '</ol>';
}

askQuestion( quiz );

print('<h2> "Javascript Quiz" </h2>');
var correctMessage = 'You got ' + correctAnswerCount + ' questions right.';
print( correctMessage );
print( 'The questions you got right were: ');
print( correctList );
print( 'The questions you got wrong were: ');
print( incorrectList );



//Define print function
function print( message ){
    document.write( message );
}
