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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
//Solution go through list one time (time O(n)) and print vowels directly but save consonants for string to be printed //after all vowels have been printed
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let consonantString = '';
    
    for(let c = 0; c < s.length; c++){
        if(vowels.includes(s.charAt(c).toLowerCase())){
            console.log(s.charAt(c));
        } else {
            consonantString += (s.charAt(c) + '\n');
        }
    }  
    console.log(consonantString);
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}