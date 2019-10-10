const Node = require('./node');

class LinkedList {
    constructor(){
        this.length=0;
        this._head=null
        this._tail=null
    }

    append(data){
        if(this._head===null && this._tail===null){
            let first_node = new Node(data);
            this._head=first_node;
            this._tail=first_node;
            this.length=1
        }
        else{
           
            let new_node=new Node(data);
            this._tail.prev=new_node
            new_node.next=this._tail
            this._tail=new_node
            this.length++
        }
        return this
    }

    head(){
        if(!this._head) return null
        return this._head.data
    }

    tail(){
        if(!this._tail) return null
        return this._tail.data}

    at(index) {
         let cur_node=this._head
        for(let i=0;i<index;i++){
            cur_node=cur_node.prev
        }
        return cur_node.data
    }

    insertAt(index, data) {
        if(this.length===0){
            return this.append(data)
        }
        let cur_node=this._head
        for(let i=0;i<index;i++){
            cur_node=cur_node.prev
        }
        let inserted_node=new Node(
            data, cur_node, cur_node.next
        )
        cur_node.next.prev=inserted_node;
        cur_node.next = inserted_node;
        return this
    }

    isEmpty() {
        if(this._head===null && this._tail===null)
            return true
        else
            return false
    }

    clear() {
        this._head = null
        this._tail = null
        this.length = 0
        return this
    }

    deleteAt(index) {
        if(this._head.prev===null){
            return this.clear()
        }
        let node_for_del=this._head
        for(let i=0;i<index;i++){
            node_for_del=node_for_del.prev
        }
        
        node_for_del.prev.next=node_for_del.next
        node_for_del.next.prev=node_for_del.prev
        this.length--
        return this
    }

    reverse(){

        let accum1=this._head
        this._head=new Node(
            this._tail.data,this._tail.next, null
        )
        this._tail=new Node(
            accum1.data, null, accum1.prev
        )
        let left_node=this._tail.next;

        for(let i=1;i<this.length-1;i++){

            let accum=left_node.next
            left_node.next=left_node.prev
            left_node.prev=accum
            left_node=left_node.next
        }
        return this
    }

    indexOf(data){
        let cur_node=this._head
        for(let i=0;i<this.length;i++){
            if(cur_node.data===data) return i
            cur_node=cur_node.prev
        }
        return -1
    }
}

module.exports = LinkedList;
