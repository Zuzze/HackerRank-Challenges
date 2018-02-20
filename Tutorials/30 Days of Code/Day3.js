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

function weird(n){
    
    let weird = true;

    if(n){
        if(n % 2 === 0){
            if( (n >= 2 && n <= 5) || (n > 20) ){
                weird = false;
            } else if( n >= 6 && n <= 20){
                weird = true;
            }
        } else {
            //odd number
            weird = true;
        }
    } else {
        console.log("number is not defined");
        return;
    }
    
    if(weird){
        console.log("Weird");
    } else {
        console.log("Not Weird");
    }
}

function main() {
    var N = parseInt(readLine());
    weird(N);
}
