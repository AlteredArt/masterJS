// Done
// turning a string into an array start with a string
const pizza = 'pizza';
// es5 .split("") takes a string and makes it an array
const slicedPizza1 = pizza.split("");
console.log('es5', slicedPizza1)
// es6 using spread instead
const slicedPizza2 = [...pizza];
console.log('es6 spread',slicedPizza2)
// Array.from() creatyes an array from a string
const slicedPizza3 = Array.from(pizza);
console.log('array.from',slicedPizza3)
