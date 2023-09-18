import {Node} from "../LinkedList/node.js"

class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0 ;
    }

    push(val){
        let newNode = new Node(val);
        
       if(!this.head){
          this.head = newNode;
          this.tail = newNode;
       }else{
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
       }
       this.length++;
    }

    pop(){
        if(!this.head) return undefined;
        let outputNode = this.head;
        this.head = this.head.next;
        this.length--;
        return outputNode;
    }
}

let todo = new Stack();
todo.push("gym");
todo.push("bath");
todo.push("breakfast");
todo.push("Office");

console.log(todo.pop().val);
console.log(todo.pop().val);
console.log(todo.pop().val);