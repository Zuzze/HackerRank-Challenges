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

function messageIsReplicable(allWords, neededWords){
    //returns whether message can be written with given magazine words
    
    //step 1: add all words and their counts from basic array to associative array (Javascript object)
    //optimal time complexity of hasOwnProperty() is O(1) when each key has one number but cannot be guaranteed irl
    let availableWords = {};
    for(let word of allWords){
        if(availableWords.hasOwnProperty(word)){
           availableWords[word] = availableWords[word] + 1; 
        } else {
            availableWords[word] = 1; 
        }
    }
    
    //step 2: check if message words are available in the hashtable
    for(let word of neededWords){
        if(availableWords.hasOwnProperty(word)){
            availableWords[word] = availableWords[word] - 1;
            if(availableWords[word] === 0){
                delete availableWords[word];
            }
        } else {
            return "No"; 
        }
    }
    return "Yes";
}
    

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    console.log(messageIsReplicable(magazine, ransom));
}
