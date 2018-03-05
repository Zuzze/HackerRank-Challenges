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

function intToString(S){
    try {
        S != Number(S) && an_undefined_function()
        console.log(Number(S))
    } 
    catch (err) {
        console.log('Bad String')
    }
}

function main() {
    /*this assignment was not ideal for Javascript
    From instructions: you can write the following withtout using conditional statement:
    <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()*/
    const S = readLine();
    intToString(S);
}