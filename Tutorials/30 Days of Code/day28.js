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

function main() {
    //find all gmail addresses from the list and sort them alphabetically
    var N = parseInt(readLine());
    let gmailArrNames = [];
    for(let i = 0; i < N; i++){
        var row = readLine().split(' ');
        //row[1] = email, row[0] = name
        if(row[1].match(/.+@gmail\.com$/)){
            gmailArrNames.push(row[0]);
        }
    }
    
    //sort gmail addresses
    gmailArrNames.sort();
    for(let name of gmailArrNames){
        console.log(name);
    }
    

}
