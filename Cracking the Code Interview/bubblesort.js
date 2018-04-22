//Bubblesort
//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
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

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    console.log(bubbleSort(a));
}

function bubbleSort(a){
    let temp;
    let numSwaps = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j+1] = temp
                numSwaps++;
            }
        }
    }
    return `Array is sorted in ${numSwaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`
}
