function processData(input) {
    let nums = input.split('\n').slice(1); //format array
    for(num of nums){
        if(isPrime(num)){
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}

function isPrime(num){
    //O(n^(1/2))
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
    //prime cannot be bigger than square root of num, increase by two because even numbers are checked earlier
    nRoot = Math.sqrt(num);
    for (let i = 3; i <= nRoot; i+=2) {
        if (num % i == 0) {
            //num has a divisor [3, sqrt(num)]
            return false;
        }
    }
    //num is prime
    return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
