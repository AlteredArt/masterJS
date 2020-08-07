// creating an array with the constructor function
class MyArray {
  constructor(){
    this.length = 0;
    this.data ={};
  }
  get(index) {
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  //shifting the items to the left by one
  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    this.data[this.length-1]
  }
}

const newArray = new MyArray();
newArray.push("hi")
newArray.push("you")
newArray.get(1)
newArray.push('!')
// newArray.delete(0);
// newArray.pop();
console.log(newArray)
