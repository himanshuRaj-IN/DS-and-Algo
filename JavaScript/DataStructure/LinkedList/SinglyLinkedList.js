import {Node} from './Node.js'

class SinglyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;    
    }
    
    // O(1)
    push(val){
        let newNode = new Node(val);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
    }

    // O(N)
    pop(){
        if(!this.head)  return undefined;
        let itr = this.head;
        let newTail = itr;
        while(itr.next){
            newTail = itr;
            itr = itr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        return itr;
    }

    // O(1)
    shift(){
        if(!this.head) undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;

    }
    
    // O(1)
    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this.head;
    }

    //O(N) 
    get(idx){
        if(idx < 0 && idx > this.length) return null;
        let current = this.head;
        let count = 0;
        while(count !== idx){
            current = current.next;
            count++;
        }
        return current;
    }

    //O(N)
    set(value, idx){
        let node = this.get(idx);
        if(node){
            node.val = value;
            return true;
        }
        return false;

    }

    insert(value , idx){
        if(idx < 0 && idx > this.length) return null;
        if(idx === this.length) return this.push(value);
        if(idx === 0) return this.unshift(value);
        let node = this.get(idx-1);
        let temp = node.next;
        let newNode = new Node(value);
        node.next = newNode;
        node.next.next = temp;
        this.length++;
        return newNode;

    }

    remove(idx){
        if(idx < 0 && idx > this.length) return null;
        if(idx === this.length) return this.pop();
        if(idx === 0) return this.shift();
        let node = this.get(idx-1);
        let temp = node.next;
        node.next = temp.next;
        return temp;
    }
}

let linkedList = new SinglyLinkedList();
linkedList.push(39);
linkedList.push(13);
linkedList.push(74);
linkedList.push(50);

// console.log(linkedList.pop().val);
// console.log(linkedList.shift().val);

console.log(linkedList.get(1));

linkedList.set(23,1)

linkedList.insert(2,2);
linkedList.remove(2);

// Iterate throught the linkedlist
let itr = linkedList.head;
while(itr.next){
    console.log("--> "+itr.val);
    itr = itr.next;
}
console.log("--> "+itr.val)