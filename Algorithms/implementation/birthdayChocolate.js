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

function solve(numberArr, d, m){
// given chocolate bar with n pieces having the numbers of numberArr in each piece, 
//find count of sets that have 'm' amount pieces and the sum of numbers in pieces equals 'd'

//Solution:
//assumption: pieces have to be given as one, no separate pieces allowed
// "slide" set of m pieces (subarray) and calculate the sum of these subarrays, if matches with d 
// -->increse counter
    let count = 0;
    let startInd = 0;
    let endInd = startInd + m; //in slice, endInd is not included in the subarray
    let pieceArr;
    while(endInd < numberArr.length + 1){
        pieceArr = numberArr.slice(startInd, endInd)
        if(getSumOfMPieces(pieceArr) === d){
            count++;
        }
        startInd++;
        endInd++;
    }
    
    return count;
}
           
function getSumOfMPieces(pieceArr){
    return pieceArr.reduce((a, b) => a + b, 0);
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}
