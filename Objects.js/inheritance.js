// inheritance allows an object to take on the properties and methods of another object
// you have a circle and square objects that need the same method say computeOptimunLocation()
// Circle and square aka Derived /sub/child
// compute method is aka base/super/parent
// inheritance is aka Is-A refernce
// two types of inheritance    classical & Prototypical
// Prototype is a parent of another object
let person = {name: "Waffles"};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('get protoTypeOf', objectBase)
console.log('getOwnPropertyDescriptor', descriptor)
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

person.name = 'Jared';
console.log(person)

// protottype vs instance memebers
function Circle(radius){
    // instance memebers
    this.radius = radius;
    this.move = function(){
        console.log('move')
    }
}
    // prototype memebers
    Circle.prototype.draw = function(){
        this.move()
        console.log("draw")
    }
const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1.draw())
console.log(c1.toString())
// set toString prototype
Circle.prototype.toString = function(){
    return 'circle with radius' + this.radius;
}
console.log(c1.toString())

// interating instance and prototype members
// object.keys only returns instance memebers
console.log(Object.keys(c1))

// for in loop returns all memebers
for (let key in c1) console.log(key)