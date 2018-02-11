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

function bigSorting(arr) {
    //big integers (strings) cannot be sorted directly
    // --> compare string lengths and if equal, 
    //then also characters (= single numbers) from left to right until difference found or strings are found equal
   
    arr.sort( ( a, b ) => {
        //Array.sort(compareFunction(a, b)), see more 
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        
        if (a.length > b.length) {
            return 1;//right order already
            
        } else if ( b.length > a.length) {
            return -1;
            
        } else if (b.length === a.length) {
            //Numbers are equally long, start comparison from the first number of the string
            let aChars = a.split('');
            let bChars = b.split('');
            
            for (let i = 0; i < a.length && i < b.length; i++) {
                let currentANum = parseInt(aChars[i]);
                let currentBNum = parseInt(bChars[i]);
                
                if (currentANum > currentBNum) {
                    return 1;
                } else if (currentANum < currentBNum) {
                    return -1;
                } else {
                    continue;
                    // Numbers were equal, continue for
                }
            }
            return 0;//all character comparisons were equal --> same number
        } else {
            console.log("something went wrong, check input");
        }
    });
    
    arr.forEach(function(currentItem) {
        console.log(currentItem);
    });
}

function main() {
    var n = parseInt(readLine());
    var arr = [];
    for(var arr_i = 0; arr_i < n; arr_i++){
       arr[arr_i] = readLine();//array of numbers as strings
    }
    var result = bigSorting(arr);
    console.log(result.join("\n"));
}
