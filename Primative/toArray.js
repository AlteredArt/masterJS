// Done
// turning a string into an array start with a string
const pizza = 'pizza';

// es5 .split("") takes a string and makes it an array
const slicedPizza1 = pizza.split("");
console.log('es5 string to array', slicedPizza1)

// es6 using spread instead
const slicedPizza2 = [...pizza];
console.log('es6 spread string to array', slicedPizza2)

// Array.from() creates an array from a string
const slicedPizza3 = Array.from(pizza);
console.log('array.from string to array', slicedPizza3)
