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

function miniMaxSum(arr) {
    //prints min and mux sum of an array when one item is not included in the sum

    //find out min and max values of the array, spread operator (...) from ES6
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);
    const sumStart = 0;
    
    // max sum = sum of everything but smallest and other way around
    //--> remove min/max val and calculate sum of remaining elements to get min and max sums
    let minSumArr = arr.slice(0);//copy original
    minSumArr.splice(minSumArr.indexOf(maxVal), 1);
    let minSum = minSumArr.reduce((total, num) => total + num, sumStart);
    
    let maxSumArr = arr.slice(0);//copy original
    maxSumArr.splice(maxSumArr.indexOf(minVal), 1);
    let maxSum = maxSumArr.reduce((total, num) => total + num, sumStart);
    
    //reduce sums only two integers at the time making also big integers possible
    
    console.log(minSum + " " + maxSum);
}


function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
