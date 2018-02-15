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


function getTotalX(arrA, arrB) {
    //return the count of numbers x so that:
    //1) all elements in list A are factors of X (x mod a[n] = 0)
    //2) x is factors of all elements in B (b[m] mod x = 0)
    //--> count the divisors of GCD/LCM
    
    //Solution
    //1) find least common multiple of all items in list A
    let lcm = getLeastCommonMultiple(arrA);
    
    //2)find greatest common divider of all items in list B
    let gcd = getGreatestCommonDivider(arrB);
    
    //3 Count the number of multiples in lcm that evenly divide the gcd
    //-> count the divisors of gcd/lcm
    
    //if gcd is not evenly divided by lcm, no common factors found
    if(Number.isInteger(gcd % lcm === 0)){ 
        return 0; 
    }
    
    let count = 0;
    for(let lcmMultiple = lcm; lcmMultiple <= gcd; lcmMultiple += lcm){
        if(gcd % lcmMultiple === 0){
            count++
        }
    }
    return count;
}
   
function getGreatestCommonDivider(arr){
    let gcd = arr[0];
    for(a of arr){
        gcd = compareGCD(a, gcd);
    }
    return gcd;
}

function compareGCD(a, b){
    //Recursive Euclidean algorithm
    //https://en.wikipedia.org/wiki/Euclidean_algorithm
    if (b === 0){
        return a
    } else {
        return compareGCD(b, a % b);
    }
}

function getLeastCommonMultiple(arr){
     let lcm = arr[0];
     for (a of arr) {
         lcm = compareLCM(lcm, a);
     }
    return lcm;
     
}
    
function compareLCM(a, b) {
    return a * (b / compareGCD(a, b));
}
                      
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}