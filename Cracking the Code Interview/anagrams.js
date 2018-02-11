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

function makeAnagrams(str1, str2){
    //save letter frequencies of both arrays 
    let freq1 = getCharacterFrequencies(str1);
    let freq2 = getCharacterFrequencies(str2);
    let removedChars = 0;
    
    for(let c of Object.keys(freq1)){
        //does character exist also in second string?
        if(freq2[c]){
            //is the frequency different? (if same, no removing needed)
            if(freq2[c] !== freq1[c]){
                //remove the letter instances that are extra
                removedChars += Math.abs(freq2[c]-freq1[c]);
            } 
            //remove letter from second string as it is now handled
            delete freq2[c];
          
        } else {
            //character is only in first string -> remove all instances
            removedChars+= freq1[c];
        }
    }
    
    //finally check how many characters are left in the second array 
    //that were not in the first array and remove them
    for(let c of Object.keys(freq2)){
        removedChars += freq2[c];
    }
    console.log(removedChars);
    return removedChars;
}

function getCharacterFrequencies(str){
    str = str.toLowerCase();
    let charArray = (str.split('').sort());
    let charFrequencies = {};
    //make hashtable of characters and their counts using key-value pairs
    for(char of charArray){
       if(charFrequencies.hasOwnProperty(char)){
           charFrequencies[char] = charFrequencies[char] + 1
       } else {
           charFrequencies[char] = 1;
       }
    }
    return charFrequencies;
}


function main() {
   
    var a = readLine();//string 1
    var b = readLine();// string 2
     /*Remove characters from the strings so that both strings has exactly same letters and letter frequences, return minimum amount of removed characters.*/
    /*MAIN PRINCIPLE:
    1)save letters and their frequencies as key value pairs for both string separately
    2)loop through first frequency pairs and remove items that does not match with other string, remove handled character from the second string object
    3)count how many chars are left in in second string (the ones that were not in first one)
    */
    makeAnagrams(a, b)

}
