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

function regexVar() {
    // match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
    // ^(a|e|i|o|u) starts with a, e, i, o or u
    // .* stipulates that the captured character must be followed by zero or more occurrences of any character
    // \1$ backreference to the first capture group ^(a|e|i|o|u) that also ends the string ($)

    //literals are preferred over regExp() constrictor when regex is constant
    return /^(a|e|i|o|u).*\1$/;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}