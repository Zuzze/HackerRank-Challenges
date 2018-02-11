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

function insertionSort1(arr) {
    //sort unsorted last number of the array to otherwise sorted list with insertion sort
    let unsortedNum = arr[arr.length - 1];
    let i;
    //move numbers from right to left until right place found
    for(i = arr.length - 2 ; i >= 0 && (arr[i] > unsortedNum); i--){
        arr[i + 1] = arr[i];
        console.log(arr.join(" "));
    }
    arr[i + 1] = unsortedNum;
    console.log(arr.join(" "));       
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort1(arr);

}
