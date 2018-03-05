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


function solve(year){
    if (year == 1918){
        //in year 1918 calendar was changed from Julian to Gregorian
        //14 feb was 32nd day of the year (+14 days compared to normal year)
        return '26.09.1918'
    } else if ((year < 1918) && (year % 4 === 0) || ((year > 1918) && (year % 400 == 0 || ((year % 4 === 0) && (year%100 !== 0))) )){
        //Julian leap year: before 1918 every fourth year was leap year
        //Gregorian leap year: after 1918 every 400th year was leap year 
        //or every fourth year that was not divisible by 100
        return '12.09.' + year.toString();
    } else {
        //normal year, february had 28 days
        return '13.09.' + year.toString();
    } 
    
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}
