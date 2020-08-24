class Queue{
    constructor(){
        this.data = [];
    }
    add(instance){
        this.data.unshift(instance);
    }
    remove(){
        return this.data.pop();
    }
}

let q = new Queue();