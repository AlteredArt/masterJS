class Circle {
    constructor(radius){
        this.radius = radius;
    }
    // instance method
    draw(){}
    // static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
// static methods are avail on the class itself not the object instance
// const circle = new Circle(1);
// static methods are only availe on the class itself
const circle = Circle.parse('{"radius": 1}')

console.log(circle)

class Math2 {
    static abs(value){

    }
}
Math2.abs()