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


function breakingRecords(scoreArr) {
    //print how many times min and max record were beated by lower/higher result of all time

    let increasedCount = 0;
    let decreasedCount = 0;
    let highest = scoreArr[0];
    let lowest = scoreArr[0];
    
    //as first one cannot be compared, start from 1
    for(let i = 1; i < scoreArr.length; i++){
        if(scoreArr[i] > scoreArr[i-1] && scoreArr[i] > highest){
            increasedCount++
            highest = scoreArr[i];
        } else if(scoreArr[i] < scoreArr[i-1] && scoreArr[i] < lowest) {
            decreasedCount++;
            lowest = scoreArr[i];
        }
    }
    
    return [increasedCount, decreasedCount];
    
}

function main() {
    var n = parseInt(readLine());
    score = readLine().split(' ');
    score = score.map(Number);
    var result = breakingRecords(score);
    console.log(result.join(" "));
}
