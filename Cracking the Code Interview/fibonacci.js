//fibonacci numbers - recursive
//https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    let fibonacciNumbers = [0, 1];
    //let temp;
    for(let i = 2; i <= n; ++i) {
        //when i is even -> i % 2 = 0
        //when i is odd -> i % 2 = 0
        fibonacciNumbers[i % 2] = fibonacciNumbers[0] + fibonacciNumbers[1];
        
        /**another option would be to create own variables for numbers
        * temp = fibonacciNumbers[0];
        * fibonacciNumbers[0] = fibonacciNumbers[1];
        * fibonacciNumbers[1] = fibonacciNumbers[1] + temp;
        */
    }
    return fibonacciNumbers[n % 2];
    //return fibonacciNumbers[1];
}
