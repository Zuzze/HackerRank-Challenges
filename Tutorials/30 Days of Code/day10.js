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

function getBinary(decimal){
    //OPTION 1 - easy way to convert number to base 2 number:
    //n.toString(2) 
    
    //OPTION 2 - logic behind the conversion
    
    let binary = "";
    while(decimal > 0){
        remainder = decimal % 2;
        decimal = decimal / 2
        binary = remainder + binary;
        console.log()
    }
  
    return binary;
}

function getNumberOfConsecutiveOnes(num) {
    //conert decimal to binary
    let binary = num.toString(2);
    
    //split string from zero positions to get array of consecutive ones
    let splitArr = binary.split("0");
    
    //get lengths of consecutive ones 
    let lengthsArr = splitArr.map( numString => numString.length);
 
    //get max count of ones = biggest number in length array
    let maxCount = Math.max(...lengthsArr);
    
    console.log(maxCount);
}

function main() {
    var n = parseInt(readLine());
    getNumberOfConsecutiveOnes(n);
}
