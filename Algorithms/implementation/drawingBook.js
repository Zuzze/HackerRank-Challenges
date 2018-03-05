process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function solve(n, p){
    //returns smallest amount of pages that has to be turned in a book 
    //when book is browsed either from the last or from first paage
    //p=page, n=total number of pages
    
    //example p's, n does not affect
    //p=1 -> 0 turns, p=2 -> 1 turn, p=3 -> 1 turn, p=4 -> 2 turns...
    //general rule
    //Math.floor(3/2) = 1 (p=3, 1 turn)
    //Math.floor(4/2) = 2 (p=4, 2 turn);
    //=> Math.floor(p/2) = turnsFromStart
    let turnsFromStart = Math.floor(p/2);

    //example p=5: 
    //n=5 -> 0 turns, n=6 -> 1 turns, n=7 => 1 turns, ..., n=10 -> 3 turns
    //general rule
    //6-5 / 2 = Math.ceil(0.5) = 1 (p=5, n=6, turns=1)
    //5-4 / 2 = Math.floor(0.5) = 0 (p=4, n=5, turns=0)
    //5-5 / 2 = 0 (p=5, n=5, turns=0)
    //=> if n%2 === 0 => Math.ceil((n-p)/2), else Math.floor((n-p)/2)
    let turnsFromEnd;
    if(n % 2 === 0 ? turnsFromEnd = Math.ceil((n-p)/2) : turnsFromEnd = Math.floor((n-p)/2));
   
    return turnsFromStart < turnsFromEnd ? turnsFromStart : turnsFromEnd
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}
