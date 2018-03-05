process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    //find whether Anna paid too much for Brian when they share the bill 
    //so that Anna does not have to pay k:th portion
    let inputLines = input.split('\n');
    let portionCount = inputLines[0].split(' ')[0];
    let k = Number(inputLines[0].split(' ')[1]);
    let portionPrices = inputLines[1].split(' ');
    let charged = Number(inputLines[2]);
    let realCharged = 0;
    
    //calculate Anna's bill
    for(let p = 0; p < portionPrices.length; p++){
        if(p === k){
            //skip k:th portion that Anna is allergic to
            continue;
        } else {
            //shared portion, add half of the price to Anna's bill
            realCharged += (portionPrices[p]/2);
        }
    }
    if(realCharged === charged){
        //Brian had charged anna correctly
        console.log("Bon Appetit");
    } else {
        //Brian had charged too much
        console.log(charged - realCharged);
    }
});
