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

function divisibleSumPairs(divisor, arr) {
    //Print the number of pairs (i,j) where i < j and a_i + a_j is evenly divisible by k
    
    //Solution
    //number of combinations with k elements do that order does not matter
    //is "n over k" = n! / ( k!(n-k)! ), k <= n
    let count = 0;
    //go through only pairs where i < j 
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i] + arr[j]) % divisor === 0){
                count++;
            }
        }
    }
    return count;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(k, ar);
    process.stdout.write("" + result + "\n");

}
