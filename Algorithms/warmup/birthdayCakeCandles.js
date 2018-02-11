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

function birthdayCakeCandles(age, candleHeights) {
    //returns amount of max value instances in the array

    // age is not necessary as max values from candle heights is asked
    // get tallest candle height
    let maxHeight = Math.max(...candleHeights);
    
    //find out how many candles there are with height "maxHeight"
    let tallestCandleCount = 0;
    for(height of candleHeights) {
        if(height === maxHeight){
            tallestCandleCount++
        }
    }
    
    return tallestCandleCount;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
