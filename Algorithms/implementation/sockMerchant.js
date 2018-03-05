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

function sockMerchant(sockColorArray) {
    //print how many matching pairs are found in given numbers (numbers represent color of sock)
    //save single socks to an array and remove if pair is already in there (+1 pair)
    let colorCodes = [];
    let pairs = 0;

    for (let sockColor of sockColorArray) {
        if (!colorCodes.includes(sockColor)) {
            colorCodes.push(sockColor);
        } else {
            pairs++;
            colorCodes.splice(colorCodes.indexOf(sockColor), 1);
        }
    }
    return pairs;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(ar);
    process.stdout.write("" + result + "\n");

}
