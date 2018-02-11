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

function staircase(n) {
    //prints staircase growing from left to right built with hashes and spaces that has n steps

    // each line has n characters that are either space or hash
    // n-staircase has n steps (lines)
    let spaces = n-1;
    let hashes = 1
    
    //repeat only in ES6, earlier e.g. Array(spaces).join(" ")
    while(spaces >= 0){
        console.log(" ".repeat(spaces) + "#".repeat(hashes));
        spaces--;
        hashes++;
    }
}

function main() {
    var n = parseInt(readLine());
    staircase(n);

}
