var message = '';
var student;
var search;

function print( message ){
    document.write( message );
}

function getStudentReport( student ){
    var report = '<h2>Student: ' + student[i].name + '</h2>';
    report += '<p>Track: ' + student[i].track + '</p>';
    report += '<p>Achievements: ' + student[i].achievements + '</p>';
    report += '<p>Points: ' + student[i].points + '</p>';
    return report;
}

while (true){
    search = prompt('Enter student name or type "quit" to close.');
    if(search.toLowerCase() === 'quit' || search === 'null'){
        break;
    } else {
        for(var i = 0; i < students.length; i ++){
            student = students[i];
            if(student.name === search){
               message = getStudentReport( student );
               print( message );
            }
        }
    }
}



