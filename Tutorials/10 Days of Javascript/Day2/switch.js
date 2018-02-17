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


function getLetter(s) {
    let setA = ['a', 'e', 'i', 'o', 'u'];
    let setB = ['b', 'c', 'd', 'f', 'g'];
    let setC = ['h', 'j', 'k', 'l', 'm']; 
    let letter = s.charAt(0);
    let returnLetter;
    
    //switch replacing multiple if statements
    switch (true) {
        case setA.includes(letter):
            returnLetter = "A";
            break;
        case setB.includes(letter):
            returnLetter = "B";
            break;
        case setC.includes(letter):
            returnLetter = "C";
            break;
        default:
            returnLetter = "D";
    }
    
    return returnLetter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}