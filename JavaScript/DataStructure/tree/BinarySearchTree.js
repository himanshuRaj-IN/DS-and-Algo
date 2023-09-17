import { Node } from "./Node.js";
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root == null ) {
            this.root = newNode;
            return this
        }else{
            let current = this.root
            while(true){
                if(value == current.val) return undefined;
                else if(value < current.val){
                    if(current.left == null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else if(value > current.val){
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }


    }
}

let tree = new BinarySearchTree();

tree.insert(45);
tree.insert(3);
tree.insert(333);
tree.insert(50);
tree.insert(12);

console.log(tree);
// console.log(tree);

