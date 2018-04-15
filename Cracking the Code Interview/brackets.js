//Balanced Brackets ES6
//https://www.hackerrank.com/challenges/ctci-balanced-brackets/forum

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

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        console.log(isBalanced(expression));
    }
}

/**
 * see if the brackets in a string are balanced 
 * ie. each bracket (), {} or [] has pair and they are not messed up
 * Balanced: {()[]}()
 * Unbalanced: [(])
 * @param {string} brackets 
 * @returns "YES" if balanced, "NO" if not
 */
function isBalanced(brackets){
    //in js there is no specific stack structure -> use array
    //add item to stack: stack.push()
    //remove item from stack: stack.pop() 
    //main idea: add always pair of the opening bracket to the stack, 
    //if string is balanced all these should be removed by the end of the string
    //stack structure makes sure the order is correct 
    let missingBrackets = [];
    brackets = brackets.split('');//split brackets into array
    
    for(let b of brackets ){
        if(b == '{'){
            missingBrackets.push('}');
        } else if(b == '['){
            missingBrackets.push(']');
        } else if (b == '('){
           missingBrackets.push(')'); 
        } else {
            //closing bracket found (assuming that other characters than brackets are not included)
            //last item in the stack does not match with closing bracket -> unbalanced  
            //pop() removes the item from stack anytime when called so no need to remove again
            if (b !== missingBrackets.pop()){
                return "NO";
            }
        }
    }
    //if all brackets have found friend in right order, stack should be empty
    if(missingBrackets.length < 1){
        return "YES";
    } else {
        return "NO";
    }
}

