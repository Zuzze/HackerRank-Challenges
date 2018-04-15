/**Implement Queue using two stacks
* https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem
* main idea: add all new items in line to queueFromFrontToBack 
* when pop/print called move items in reverse order to queueFromBackToFront 
* and clear from the queueFromFrontToBack 
*/
function processData(input) {
    let queue = new Queue();
    input = input.split("\n").slice(1); //skip first line containing number of lines
    for(let el of input){
        if(el.startsWith("1")){
            queue.enqueue(el.substring(2));
        } else if(el.startsWith("2")){
            queue.dequeue();
        } else if(el.startsWith("3")){
            console.log(queue.getHead());
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

//ES6 class for Queue
class Queue {
  
  constructor() {
    //create empty stacks
    this.queueFromFrontToBack = [];
    this.queueFromBackToFront = [];
  }
  
  enqueue(value) {
    //add items always to the first stack
    this.queueFromFrontToBack.push(value);
  }
  
  dequeue() {
    this.moveEnquedItems();
    this.queueFromBackToFront.pop();
  }
  
  moveEnquedItems() {
    /** move items in reverse order from queueFromFrontToBack -> queueFromBackToFront
    * remove items from original queueFromFrontToBack
    * To save time, move items only when stack has gone empty:
    * it does not matter who are the new guys in the line before the previous guys are gone
    * because the old guys are dequeued/getHeaded first anyway
    */
    if(this.queueFromBackToFront.length === 0) {
       while(this.queueFromFrontToBack.length > 0) {
        this.queueFromBackToFront.push(this.queueFromFrontToBack.pop());
      }
    }
  }
  
  getHead() {
    this.moveEnquedItems();
    var value = this.queueFromBackToFront.pop();
    this.queueFromBackToFront.push(value);
    return value;
  }
}

