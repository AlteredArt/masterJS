console.log("ES6 Functions")

const isValid = (bool) => bool;

var answer = isValid(false) ? "You may enter" : "Acess Denied"
    console.log(answer)
var automatedAnswer = "Your account # is " + (isValid(true) ? "1234" : "not Valid")
    console.log(automatedAnswer)

//switch
function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "You went forward";
            break;
        case "backward":
            whatHappens = "You went backward";
            break;
        case "left":
            whatHappens = "You went left";
            break;
        case "right":
            whatHappens = "You went right";
            break;
        default:
            whatHappens = "Please move in a valid direction";  
    }
    return whatHappens;
}
console.log(moveCommand("meow"));

//es6 function closures
const first = () => {
    const greet = "hi";
    const second = () => alert(greet);
    return second;
}
const newFunc = first()
console.log(newFunc())

// Currying (converting a func that takes multiple args into a func that takes them one at a time)
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a * b;
console.log("curried", curriedMultiply(4)(5))

//Compose
const compose = (f,g) => (a) => f(g(a));

