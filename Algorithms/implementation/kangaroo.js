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

function kangaroo(x1, v1, x2, v2) {
    //returns YES or NO to describe if two kangoroos will be in the same location or not in the future
    //starting locations of kangaroos 1 < x1 < x2 < 10000
    //speed of kangaroos 1 < v1, v2 < 10000 
   
    // if second kangaroo is faster, the first will never reach as x1 < x2
    // --> check that v1 > v2 that kangaroos even could meet
    
    //n = number of jumps
    //kangoroo1 locations: x1 + n*v1
    //kangaroo2 locations: x2 + n*v2
    //are they same?:
    //x1 + n*v1 = x2 + n*v2
    //x2 - x1 = n(v1-v2)
    // if x2-x1 is divisible with n(v1-v2), common location found
    //n is just a multiplier -> does not affect modulo so lets take n = 1
    if(v1 > v2 && ( (x2-x1) % (v1-v2) === 0) ){
        return "YES";
    } else {
        return "NO";
    }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}
