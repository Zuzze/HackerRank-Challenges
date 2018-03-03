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
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
    //One way linked lidt implementation in JavaScript
    this.insert = function(head, data){
        if(head === null){
            //if linked list is empty, new node can be added directly
            return new Node(data)
        } else if(head.next === null){
            //if head's next is free, add new node there
            head.next = new Node(data);
        } else {
            //if free space is not in current node or in its next node, 
            //move on in the linked list until free space is found 
            this.insert(head.next, data);
        }
        return head;
    };
    this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		