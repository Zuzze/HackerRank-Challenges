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

function solve(a0, a1, a2, b0, b1, b2){
    //if more people/categories added, it could be useful to give each participants elements as a list
    let a = [a0, a1, a2];
    let b = [b0, b1, b2];
    let aPoints = 0;
    let bPoints = 0;
    const categories = 3;
    
    for(let i = 0; i < categories; i++){
        if(a[i] > b[i]){
            aPoints++;
        } else if(a[i] < b[i]){
            bPoints++;
        }
        //nothing is done if points are equal
    }
    
    return aPoints + " " + bPoints;
    
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result);
}
