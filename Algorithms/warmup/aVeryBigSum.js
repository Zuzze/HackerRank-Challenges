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

function main() {
    var n = parseInt(readLine());
    // use array with text strings instead of numbers
    ar = readLine().split(' ');
    var sum = 0;
    //add integers to sum integer by parsing one int at a time
    ar = ar.map(num => sum += parseInt(num));
    process.stdout.write("" + sum + "\n");
}
