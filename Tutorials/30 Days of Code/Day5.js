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

function multiply(n){
    for(let i = 1; i < 11; i++){
        console.log(n + ' x ' + i + ' = ' + n*i);
    }
}

function main() {
    var n = parseInt(readLine());
    multiply(n);

}