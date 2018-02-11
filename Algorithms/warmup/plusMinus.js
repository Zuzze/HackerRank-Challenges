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

function plusMinus(arr) {
    //prints fraction of pos, neg and zeros in a given array
    let pos = 0;
    let neg = 0;
    let zeros = 0;
    const all = arr.length;
    
    for (let val of arr) {
        if(val > 0){
            pos++;
        } else if(val < 0){
            neg++;
        } else if(val === 0){
            zeros++;
        } else {
            throw "Input could not be read";
        }
    }
    
    console.log(frac(pos, all) + "\n" + frac(neg, all) + "\n" + frac(zeros, all));
}

function frac(numInstances, amountOfAll){
    //calculates fraction (not %) of given number with 6 decimal accuracy
    return (numInstances/amountOfAll).toFixed(6);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);

}
