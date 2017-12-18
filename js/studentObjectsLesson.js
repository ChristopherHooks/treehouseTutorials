//WORKING WITH OBJECTS

// function print( message ){
//     var div = document.getElementById( 'output');
//     div.innerHTML = message;
// }

//Creating objects w/ object literals
var person = {
    name: 'Chris',
    age: 28,
    country: 'US',
    isWebDeveloper: true,
    skills: ['HTML', 'CSS', 'JavaScript']
};

//Accessing object properties
/**
alert( person.name );
person.age = 29;
alert( person.age );
person.height = 5.8;
alert( person.height );

var message = 'Hello. My name is ' + person.name;
alert( message );
 **/

//Looping through objects
for(var key in person ){
    console.log( key + ': ' + person[key] );
}

//Creating an array of objects
/**
var question;
var answer;
var response;
var correctAnswers = 0;

var questions = [
    {
        question: 'Rick and ....',
        answer: 'Morty'
    },
    {
        question: 'It airs on...',
        answer: 'Adult Swim'
    },
    {
        question: 'Wubba Lubba...',
        answer: 'Dub Dub'
    }
];

for(var i = 0; i < questions.length; i ++){
    question = questions[i].question;
    answer = questions[i].answer;
    response = prompt(question.toLowerCase());
    if(response === answer.toLowerCase()){
        correctAnswers +=1;
    }
}

alert('You got ' + correctAnswers + ' correct.');
**/

//Create data structure that holds info about a group of students
//Array of objects with properties (Name, Track, Achievements, Points)
//Create 5 students

var students = [
    {
        name: 'Chris',
        track: 'Front End Web Developer',
        achievements: 120,
        points: 4328
    },
    {
        name: 'Crystal',
        track: 'Massage Therapy',
        achievements: 229,
        points: 8362
    },
    {
        name: 'Eric',
        track: 'Software Engineering',
        achievements: 153,
        points: 3212
    },
    {
        name: 'RJ',
        track: 'PHP Development',
        achievements: 312,
        points: 7234
    },
    {
        name: 'Robby',
        track: 'Ruby on Rails',
        achievements: 432,
        points: 8123
    }
];


