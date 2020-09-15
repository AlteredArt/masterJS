// Arrays are numbered lists with indexes

// in an Array
const colors = ['red', 'blue', 'green'];
for (let index in colors)
console.log(index, colors[index])


// for of ideal for arrays
for (let color of colors)
  console.log(color);



console.log('Starting Arrays')
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
// character array
console.log("array list", characters);
// character array length
console.log("length of array", characters.length);
// Last index of character
console.log("last index of array", characters[characters.length-1]);
// index of array
console.log("array index", characters[2]);
// pushing to an array
characters.push('Anakin');
console.log("array push", characters, "add to last");
// poping from an array
characters.pop();
console.log("array pop", characters, "remove the last");
// unshifting from an array
characters.unshift("C3PO");
console.log("array unshift", characters, "add to begin");
//shifiting an array
characters.shift("R2D2");
console.log("array shift", characters, "remove from begin");
// sorting an array
console.log("array sort alpha", characters.sort());
//includes in an array
console.log("includes",characters.includes("luke"));
// contacting
console.log("concat", characters.concat(["meow"]))
