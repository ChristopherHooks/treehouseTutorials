var shopping = [ 'milk', 'carrots', 'eggs'];

console.log( shopping[0]);
console.log( shopping.length );

//Add item to array
shopping.push( 'jerky', 'cheese', 'pasta' );

//Add to beginning of array
shopping.unshift( 'water' );

//Pull last item from array and return
shopping.pop();

//Pull item from first index of array
shopping.shift();


//Create array of numbers
var nums = [ 1, 2, 3, 4, 5 ];

//Remove items with .shift()
var items = ['Hat', 'Ball', 'Shoes'];
var firstItem = items.shift();
// firstItem now holds 'Hat'
// and items is now ['Ball', 'Shoes']

//Iterate array w/ for loop
var students = ['Sasha', 'Chris', 'Toby', 'Garret'];
for (var i = 0; i < students.length; i ++){
    console.log(students[i]);
}

//Create ordered list on page w/ for loop
function printList( list ){
    var listHTML = '<ol class="testList">';
    for (var i = 0; i < list.length; i ++){
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    document.write(listHTML);
}

printList(students);
//End ordered list

//Join method
var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var daysString = daysInWeek.join(', ');

console.log( daysString );

//Concat method
var currentStudents = students;
var newStudents = items;

var allStudents = currentStudents.concat( newStudents );
console.log( allStudents );

//Index of method
var fruit = ['Apple', 'Orange', 'Grapefruit'];
var position = fruit.indexOf('Grapefruit');
//Returns 2. If item is not in array, it will return -1


//Two-dimensional arrays
var grades = [
  [80, 90, 100, 95],
    [75, 95, 85, 100],
    [60, 80, 70, 77]
];

var student1Test4 = grades[0][3];
console.log( student1Test4 );






























