console.log('arrow functions')
// set timeout arrow function
setTimeout(() => {
  console.log("This comes first")
}, 1000);


const blastoff = () => console.log("3...2...1, Blastoff!")
blastoff();

//add arrow function
const add = (a,b) => a + b;
console.log(add(3, 5))