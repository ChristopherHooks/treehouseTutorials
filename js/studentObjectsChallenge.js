function print( message ){
    document.write( message );
}

// var message = '';

//Iterate through array
/**
for(var i = 0; i < students.length; i ++){
    //access each object and print key
    message += '<h2>Student: ' + students[i].name + '</h2>';
    message += '<p>Track: ' + students[i].track + '</p>';
    message += '<p>Achievements: ' + students[i].achievements + '</p>';
    message += '<p>Points: ' + students[i].points + '</p>';

}

print(message);
**/

/**var name;
var track;
var achievements;
var points;

for(var i = 0; i < students.length; i++){
    name = students[i].name;
    track = students[i].track;
    achievements = students[i].achievements;
    points = students[i].points;

    console.log(name + track + achievements + points);
}
**/
