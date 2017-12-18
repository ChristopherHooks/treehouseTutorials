function print( message ){
    document.write( message );
}

var playlist = [
    [ 'Parabola', 'Tool' ],
    [ 'Mer de Noms', 'APC' ],
    [ 'Crown', 'Run the Jewels' ],
    [ 'Imagine', 'John Lennon' ],
    [ 'Maybellene', 'Chuck Berry' ]
];


function printSongs( songs ){
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i ++){
        listHTML += '<li>' + songs[i][0] + ', by ' + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printSongs( playlist );
