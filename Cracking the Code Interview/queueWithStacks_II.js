//Implement Queue
//https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem
//main idea: use array as queue in ES6 (alternative for two stacks)

function processData(input) {
    let queue = new Queue();
    input = input.split("\n");
    for(let line of input){
        if(line.startsWith("1 ")){
            queue.enqueue(line.substring(2));
        } else if(line.startsWith("2")){
            queue.dequeue();
        } else if(line.startsWith("3")){
            console.log(queue.getFirstInLine());
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
    //create empty queue 
    this.queueFromFrontToBack = [];
  }
  
  enqueue(value) {
    this.queueFromFrontToBack.push(value);
  }
  
  dequeue() {
      if(this.queueFromFrontToBack.length > 0){
          //remove first element of the array and moves indice by using shift (faster than splice)
          this.queueFromFrontToBack.shift();
      }
  }
  
  getFirstInLine() {
    return this.queueFromFrontToBack[0];
  }
}

