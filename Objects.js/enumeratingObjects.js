function Circle(radius){
    console.log('what is this', this)
    this.radius = radius;
    this.draw = function(){
        console.log("constructor draw")
    }
}
const anotherCircle = new Circle(3);

for (let key in anotherCircle) {
    if ( typeof anotherCircle[key] !== 'function')
    console.log(key, anotherCircle[key])
}
// another way to get keys in an object in an array
const keys = Object.keys(anotherCircle)
console.log(keys);

// find if an object has an even property
if('radius' in anotherCircle)
console.log("Circle has a radius");