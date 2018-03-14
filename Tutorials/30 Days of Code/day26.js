function processData(input) {
    //parse input into two arrays containing day, month and year, convert strings to numbers
    let actualDate = input.split('\n')[0].split(' ').map(Number);;
    let expectedDate = input.split('\n')[1].split(' ').map(Number);;
    let fine = 0;
    
    if(expectedDate[2] > actualDate[2]){
        //book was returned in the previous year
        fine = 0;
    } else if(expectedDate[2] < actualDate[2]){
        //book was returned the year after actual year
        fine = 10000;
    } else {
        //book was returned in the same year --> more comparison needed
        if(expectedDate[1] < actualDate[1]){
            //book was returned in same year but different month
            fine = 500 * (actualDate[1] - expectedDate[1]);
        } else if(expectedDate[1] === actualDate[1]){
            //book was returned in same month
            if(expectedDate[0] < actualDate[0]){
                fine = 15 * (actualDate[0] - expectedDate[0]);
            }
        }
    }
    console.log(fine);
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
