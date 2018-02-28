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

function getHourglassMaxSum(matrix){
    //@returns max sum of hourglasses (3x3) in square matrix
    //logic: calculate and add each hourglass sum in the matrix to an array
    //the max value in the array is max sum
    
    let sums = [];
    let sumInd = 0;
    for(let i = 0; i <= 3; i++) {
        for(let j = 0; j <= 3; j++) {
            sums[sumInd] = 
                matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
                + matrix[i+1][j+1] +
                + matrix[i+2][j] + matrix[i+2][j+1] + matrix[i+2][j+2]
            sumInd++;
        }
    }
   return Math.max(...sums);
}

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    console.log(getHourglassMaxSum(arr, 3));

}
