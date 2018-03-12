import java.util.*;
import java.io.*;
class Node{
    Node left,right;
    int data;
    Node(int data){
        this.data=data;
        left=right=null;
    }
}
class Solution{
    static void levelOrder(Node root){

    Queue<Node> queue = new LinkedList();
    queue.add(root);
    
    /*
    Main idea: go through the tree by storing elements to a queue from left to right on each level

    example tree
             3
          2       5
       1        4    7
    
    Round 0
    init queue: 3
    
    Round 1 
    current: root Node 3, print data 3 and remove node from queue
    add: right and left nodes (2 and 5) to queue which is now empty
    queue after round: 2, 5 
    
    Round 2
    current: first removed (FIFO) Node = 2
    add: add left (1) to queue
    queue: 5, 1
    
    Round 3
    current: 5
    add: 4, 7
    queue: 1, 4, 7
    
    Round 4
    current: 1
    add: -
    queue: 4, 7
    
    Round 5
    current: 4
    add: -
    queue: 7
    
    Round 6
    current: 7
    add: -
    queue: -
    
    */
    
        while(!queue.isEmpty()){
            Node current = queue.remove();
            System.out.print(current.data + " ");
            if (current.left!=null) queue.add(current.left);
            if (current.right!=null) queue.add(current.right);
        }
    }

    public static Node insert(Node root,int data){
        if(root==null){
            return new Node(data);
        }
        else{
            Node cur;
            if(data<=root.data){
                cur=insert(root.left,data);
                root.left=cur;
            }
            else{
                cur=insert(root.right,data);
                root.right=cur;
            }
            return root;
        }
    }

    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int T=sc.nextInt();
        Node root=null;
        while(T-->0){
            int data=sc.nextInt();
            root=insert(root,data);
        }
        levelOrder(root);
    }	

}