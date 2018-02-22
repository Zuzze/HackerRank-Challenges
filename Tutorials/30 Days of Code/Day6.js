function processData(input) {
    let odds = "";
    let evens = "";
    let words = input.split('\n').slice(1);
    for(let word of words){
        for(let i = 0; i < word.length; i++){
            if(i % 2 === 0 || i === 0){
                evens += word.charAt(i);
            } else {
                odds += word.charAt(i);
            } 
        }
        console.log(evens + " " + odds);
        evens = "";
        odds = "";
    }
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
