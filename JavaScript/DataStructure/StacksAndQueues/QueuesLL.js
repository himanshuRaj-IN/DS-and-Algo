import { Node } from "../LinkedList/node.js";

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    dequeue(){
        if(!this.head) return undefined;
        let outputNode = this.head;
        this.head = this.head.next;
        return outputNode;
    }
}

let nQueue = new Queue();
nQueue.enqueue("Ramesh");
nQueue.enqueue("Suresh");
nQueue.enqueue("xyzmeah");
nQueue.enqueue("pramesh")

console.log(nQueue.dequeue());