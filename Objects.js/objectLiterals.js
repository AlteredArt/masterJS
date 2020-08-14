// object literal Syntax
// if a members is a function in an object we call it a method
// all other memebers are called properties

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("DRAW");
    }
};

// using dot Notation
circle.draw();
console.log(circle.radius)
console.log(circle.location.x)