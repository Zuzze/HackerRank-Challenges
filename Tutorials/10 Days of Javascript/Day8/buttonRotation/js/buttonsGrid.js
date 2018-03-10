//rotate numbers around 5 clockwise on each click
window.onload = function () {
    let rotationOrder = [1, 4, 7, 8, 9, 6, 3, 2];
    let btnArr = document.querySelectorAll("button:not([id=btn5])");
    document.getElementById("btn5").onclick = function () {
        for(let btn of btnArr){
            //if current number in button is not last in the array, 
            //place next number in the array to btn
            if(parseInt(btn.innerHTML) !== rotationOrder[rotationOrder.length - 1]){
                btn.innerHTML = rotationOrder[rotationOrder.indexOf(parseInt(btn.innerHTML)) + 1];
            //if current value is last item in array, next number is first in the array
            } else {
                btn.innerHTML = rotationOrder[0]
            }
        }
    }
};