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

class Solution {
    
    constructor() {
        this.stack = [];
        this.queue = [];
    }
    // check whether given string is palindrome
    // Javascript does not have built-in data structures for stack and queue
    //=> use arrays
    

    //Stack: LIFO (Last-in-First-Out)
    pushCharacter(character) {
        //add as last item
        this.stack.push(character);
    }

    popCharacter(){
        //remove on latest added item from stack
        return this.stack.pop();
    }

    //Queue: FIFO (First-in-First-Out)
    enqueueCharacter(character) {
        //add new item to the end of queue
        this.queue.push(character);
    }

    dequeueCharacter() {
        //remove and return first element of array
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
        return this.queue.shift();
    }
}

function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}