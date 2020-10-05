// String Templates
console.log("string templates")
const name = "Waffles"
const status = "fine"

// old way
const greeting = "Hello " + name + " you seem to be doing " + status + " !"
console.log("old way", greeting)

// new way
const bestGreeting = `"Hello ${name} this is ${status}"`
console.log("new way", bestGreeting)

// function
function greet(name="", age=30, pet="cat"){
    return `Hello ${name="Tim"} you are ${age=24}, nice ${pet}`
}
console.log("template function", greet())