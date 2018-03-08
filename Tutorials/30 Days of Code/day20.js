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

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    bubbleSort(a);
}

function bubbleSort(arr){
    let totalSwaps = 0;
    for (let i = 0; i < arr.length; i++) {
        // Track number of elements swapped during a single array traversal
        let numberOfSwaps = 0;
    
        for (let j = 0; j < arr.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                numberOfSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        } else {
            totalSwaps += numberOfSwaps;
        }
    }
    
    console.log("Array is sorted in " + totalSwaps + " swaps.");
    console.log("First Element: " + arr[0]);
    console.log("Last Element: " + arr[arr.length - 1]);

}
