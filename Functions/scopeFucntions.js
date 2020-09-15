console.log("scope function")
// Closures
const first = () => {
    const greet = "Hi";
    const second = () => {
        console.log(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying (converting a func that takes multiple args into a func that takes them one at a time)
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(4)(5))

