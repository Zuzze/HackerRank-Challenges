'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    //if number is even -> double num, if not -> triple num
    //arrow function format is (param1, param2,..) => {statements/return/expression}
    // if only one parameter/expression -> no paranthesis needed 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    
    let returnArr = nums.map( num => num = (num % 2 === 0 ? num * 2 : num * 3));
        
   /* SAME AS
   let returnArr = nums.map( num => {
        if(num % 2 === 0){
            return num * 2;
        } else {
            return num * 3;
        }
    });
    */
   
    /*old style:
    let returnArr = nums.map( function(num) {
      if(num % 2 === 0){
        return num * 2;
      } else {
        return num * 3;
      }
    });*/
                          
    return returnArr;
    
}