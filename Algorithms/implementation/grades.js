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

function solve(grades){
    //round up grades (0-100) to next multiple of 5
    //if distance from next multiple is < 3 and the rounding will result passing grade ie. >=40
    
    let roundedGrades = [];
    const minPassingGrade = 38;
    // next modulo for multiple of 5 is < 3 --> modulo for current number has to be >= 3
    for(let grade of grades){
        if(grade % 5 >= 3 && grade >= minPassingGrade){
            //common rounding equation to nearest multiple of x: Math.round(number/x)*x)
            roundedGrades.push(Math.ceil(grade/5)*5);//round up to next 5
        } else {
            roundedGrades.push(grade);
        }
           
    }
    return roundedGrades;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}