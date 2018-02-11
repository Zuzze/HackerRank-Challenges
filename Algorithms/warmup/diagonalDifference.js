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

function diagonalDifference(a) {
    // Returns absolute difference of main and secondary diagonals in a matrix
    let sumMainDiagonal = 0;
    let sumSecDiagonal = 0;
    
    let mainInd = 0;
    let secInd = a[0].length - 1; //assume all rows have same length in matrix;
    
    for(let row = 0; row < a.length; row++){
        sumMainDiagonal += a[row][mainInd];
        mainInd++;
        
        sumSecDiagonal += a[row][secInd];
        secInd--;
    }
    return Math.abs(sumMainDiagonal - sumSecDiagonal);
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    //console.log(a);
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
