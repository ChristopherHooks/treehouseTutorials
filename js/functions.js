//Basic Function Syntax
function alertRandom() {
    var randomNumber = Math.floor( Math.random() * 6 + 1);
    alert(randomNumber);
}

/*
alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();
*/


//Function expression syntax (assigned to variable)
var alertRandom2 = function () {
    var randomNumber = Math.floor( Math.random() * 6 + 1);
    //alert(randomNumber);
};

alertRandom2();

//Return from function
function alertRandom3( lower, upper ) {
    if (lower >= upper) {
        return "Please enter the lower number first."
    } else if ( isNaN(lower) || isNaN(upper)){
        throw new Error("Enter a valid number, you idiot.")
        } else {
        return Math.floor(Math.random() * (upper - lower) + lower);
    }
}

alert( alertRandom3( 'fifteen', 20 ) );

alert( alertRandom3( 200, 100 ) );


//Calculate area
function getArea( length, width, unit){
    var area = length * width;
    return area + ' '+ unit;
}

//alert(getArea( 3, 4, 'sq ft'));
