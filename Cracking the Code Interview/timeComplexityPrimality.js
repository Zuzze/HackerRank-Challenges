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
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        if(isPrime(n)){
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}


function isPrime(num){
    //O(sqrt(n))
    //constraints n >= 1
    
    if( num == 2){
        //2 is prime
        return true;
    } else if ( num == 1 || num % 2 == 0){
        //1 or numbers divisable by 2 are not prime
        return false;
    } else if (!num || num < 1){
        console.log('Invalid input');
        //throw error
    }
    //prime cannot be bigger than square root of num
    //start from 3 because 1 and 2 checked
    //increase by two because even numbers are checked earlier
    nRoot = Math.sqrt(num);
    for (let i = 3; i <= nRoot; i+=2) {
        if (num % i == 0) {
            //num has a divisor between [3, sqrt(num)]
            return false;
        }
    }
    //num is prime
    return true;
}
