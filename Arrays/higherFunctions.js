//ES10
//Flat
const array = [1, 2, [3, 4, [5]]]
console.log("flat:", array.flat(2))
console.log("spread:", ...array)


//Flat Map
jurassicPark = [[1, 2], 4, 5, [6, 7[8, 9]]]
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + [3])
console.log('flat map:', jurassicParkChaos)


//From Entries
userProfile = [['commanderTom', 23], ['private johnson', 40]]
console.log('from entries:', Object.fromEntries(userProfile))

//ES6
// Currying (converting a func that takes multiple args into a func that takes them one at a time)
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log("curried:", curriedMultiply(4)(5))

//Compose
const compose = (f, g) => (a) => f(g(a));

//function expression (annon func)
var sayBye = function () {
    console.log('anon func:', "Say Bye");
}
sayBye();