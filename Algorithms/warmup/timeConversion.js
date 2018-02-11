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

function timeConversion(s) {
    //prints given 12-hour clock time (e.g. 10:04:22PM) as 24-hour clock time (e.g. 22:04:22)
    let hours = parseInt(s.substring(0, s.indexOf(':')));
    let minutes = parseInt(s.substring(s.indexOf(':') + 1, s.lastIndexOf(':')));
    let seconds = parseInt(s.substring(s.lastIndexOf(':') + 1, s.lastIndexOf(':') + 3));
    let newHours;

    //midnight 24:00 -> 00:00
    if(hours === 12) {
        newHours = 0;
    } else {
        newHours = hours;
    }
    let shift;
    if(s.toLowerCase().indexOf('pm') > -1) {
        shift = 12;
    } else {
        shift = 0;
    }

    let formatedHours = format((newHours + shift).toString());
    let formatedMinutes = format(minutes.toString());
    let formatedSeconds = format(seconds.toString());

    console.log(formatedHours + ":" + formatedMinutes + ":" + formatedSeconds);

    function format(numString) {
        //takes care of times starting with zero
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }
}

function main() {
    var s = readLine();
    var result = timeConversion(s);

}
