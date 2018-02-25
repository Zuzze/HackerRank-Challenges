function processData(input) {
    let entries = input.split('\n').slice(1);
    let phoneBook = {};
    for(ent of entries){
        if(ent.indexOf(" ") > 0){
            //contact to add
            let name = ent.slice(0, ent.indexOf(" "));
            let number = ent.slice(ent.indexOf(" ") + 1);
            phoneBook[name] = number;
        } else {
            //asking numbers
            if(phoneBook[ent]){
                console.log(ent + "=" + phoneBook[ent]);
            } else {
                console.log("Not found");
            }

        }
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
