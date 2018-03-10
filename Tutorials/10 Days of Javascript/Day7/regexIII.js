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
     * It must match ALL occurrences of numbers in a string.
     */
    
    //OPTION 1: 
    // \ : Backslashes are used for escaping inside a string and string-specific special characters like \d
    // \d : A single digit character (i.e., [0-9])
    // + : at least one time previous part (\d)
    // flag g : g modifier is used to perform a global match (find all matches rather than stopping after the first match)
    //Constructor RegExp provides runtime compilation
    //use when regex changing or you don't know the pattern/get it from another source
    //return new RegExp('\\d+', 'g');
    
    //OPTION 2:
    //regex like previous but no escape of \ needed as not string and framed wirh common regex syntax "/regex/flags"
    //alternatively using Regular expression literals 
    //provide compilation of regex when the script is loaded. 
    //If the regular expression remains constant, using this can improve performance.
    
    //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    
    return /\d+/g;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}