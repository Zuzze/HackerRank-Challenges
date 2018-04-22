//Find number from the int array that has only one instance in the array
//https://www.hackerrank.com/challenges/ctci-lonely-integer/problem
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
    console.log(lonelyIntegerBitwise(a));
}

function lonelyIntegerBitwise(arr){
    //compare array items in pairs with bitwise operation XOR (^), 
    //the one which is left last is lonely integer
    //XOR sets each bit to 1 if only one of two bits is 1
    return arr.reduce((num1, num2) => {
        //console.log(`${num1.toString(2)} XOR ${num2.toString(2)} = ${(num1 ^ num2).toString(2)}`);
        return num1 ^ num2;
    });
}

function lonelyIntegerBucketSort(arr){
    //bucket sort with (key, value) object
    let frequencies = {}
    for(let num of arr){
        if(frequencies[num]){
            frequencies[num] = frequencies[num] + 1;
        } else {
            frequencies[num] = 1;
        }
    }
    //return integer that has frequency of 1
    let lonelyInd = Object.values(frequencies).indexOf(1);
    return Object.keys(frequencies)[lonelyInd];
}
