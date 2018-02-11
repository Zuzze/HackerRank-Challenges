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

function insertionSort2(arr) {
  //Insertion sort for unsorted array
  //move in array from left to right comparing always rightmost value with left values until they are sorted

   //in the first round there is only one value in list so it is already sorted -> start with i=1
   // i = starting index of the number that will be compared with others
   // j = index telling which is the last index that is to be sorted in that iteration
  for (let i = 1; i < arr.length; i++) {
     let j = i;
      
      //continue swapping from right to left until the whole beginning (all items before j) of the array is sorted
     while (arr[j] < arr[j-1] && j >= 0) {
         
        //swap
        let tmp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tmp;
         
        //move on to the next value
        j--;
     }
        console.log(arr.join(' '));
     }   
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort2(arr);

}
