// note: functions are objects
// factory functions
// circle.constructor shows our factory function
function createCircle(radius){
    return {
        radius,
        location: {
            x: 1,
            y: 1
        },
        draw: function(){
            console.log("DRAW");
        }
    };
}
const circle = createCircle(2);
circle.draw()
console.log(circle.radius)


// constructor Function
// this and new are required for a cronstructor function
// Circle.name
// Circle.length
// call method      Circle.call({}, 1)
// apply method        Circle.apply({}, [1,2,3]);
// anotherCircle.constructor shows our constructor function

function Circle(radius){
    console.log('what is this', this)
    this.radius = radius;
    this.draw = function(){
        console.log("constructor draw")
    }
}
const anotherCircle = new Circle(3);

anotherCircle.draw()
console.log(anotherCircle.radius)
// adding properties
anotherCircle.location = {x: 1}
anotherCircle['place'] = {y:2}
// delete a property
delete anotherCircle.place