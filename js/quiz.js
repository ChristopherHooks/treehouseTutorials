//Count correct answers
var count = 0;

//Ask question 1
var answer1 = prompt("What is the capitol of Oklahoma?");
        if(answer1.toUpperCase() === 'OKLAHOMA CITY' || answer1.toUpperCase() === 'OKC'){
            count += 1;
            alert('You answered correctly!');
        } else {
            alert('You answered incorrectly. The correct answer is Oklahoma City.');
        }

var answer2 = parseInt(prompt('What is 9 x 6'));
        if( answer2 === 54){
            count += 1;
            alert('You answered correctly!');
        } else {
            alert('You answered incorrectly. The answer is 54');
        }

var answer3 = prompt("Name one member of Run the Jewels.");
            if (answer3.toUpperCase() === "KILLER MIKE" || answer3.toUpperCase() === "LP"){
                count += 1;
                alert('You answered correctly!');
            } else {
                alert('You answered incorrectly. The answers were "Killer Mike", or "LP"');
            }

var answer4 = prompt("True or False: The logical operator for 'or' in JavaScript is &&?");
if (answer4.toUpperCase() === 'FALSE' || answer4.toUpperCase() === 'F'){
    count += 1;
    alert('You answered correctly!');
} else {
    alert('You answered incorrectly. The or operator in JavaScript is represented by ||.');
}

var answer5= parseInt(prompt("What is returned by the equation 73 % 7 in JavaScript?"));
if (answer5 === 3){
    count += 1;
    alert('You answered correctly!');
} else {
    alert('You answered incorrectly. 73 mod 7 is equal to 3 in JavaScript.');
}

//Rank player 5 = gold 3-4 = silver 1-2 = bronze 0 = no crown
var crown;
if (count === 5){
    crown = 'Gold';
} else if (count > 2){
    crown = 'Silver';
} else if (count > 0){
    crown = 'Bronze';
} else {
    crown = 'None';
}
//Alert number of correct answers
if (count !== 0){
    alert("Congratulations! You answered " + count + " questions correctly! You earned the " + crown + " crown!");
} else {
    alert("Sorry. You didn't answer any questions correctly. Better luck next time!");
}
