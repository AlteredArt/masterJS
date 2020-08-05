// turning a string into an array
const pizza = 'pizza';
// es5 .split("") takes a string and makes it an array
const slicedPizza1 = pizza.split("");
// es6 using spread instead
const slicedPizza2 = [...pizza];
// Array.from() creatyes an array from a string
const slicedPizza3 = Array.from(pizza);
console.log(slicedPizza1, slicedPizza2, slicedPizza3)
