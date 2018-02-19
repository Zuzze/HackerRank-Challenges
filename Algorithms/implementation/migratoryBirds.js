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

function migratoryBirds(arr) {
    //print bird type (1-5) with highest frequency or if equal, type with smaller id
    
    //solution: create buckets for types where you store each type
    let typeCounts = [0, 0, 0, 0, 0]; // types 1, 2, 3, 4, 5
    //go through the array once and save frequencies, time O(n)
    for(let i = 0; i < arr.length; i++){
        typeCounts[arr[i]-1]++;
    }
  
    //spread operator (...) corresponds .apply returning index of max item in the array, +1 because of indexing
    return typeCounts.indexOf(Math.max(...typeCounts)) + 1;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(ar);
    process.stdout.write("" + result + "\n");

}
