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
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    // ^(Mr|Mrs|Ms|Dr|Er) : starts with one of these
    // (\\.) : followed by dot (dot has other meaning in regex so needs to be escaped --> \.
    // ([a-zA-Z])+$ : followed by at least one (+) lowercase or uppercase letter ending ($) with that too

    
    //literals are preferred over regExp() constrictor when regex is constant
    return /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}