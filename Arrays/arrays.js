// Arrays are numbered lists with indexes
console.log('Starting Arrays')
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];

console.log("array list", characters);
console.log("length of array", characters.length);
console.log("last index of array", characters[characters.length-1]);
console.log("array index", characters[2]);

characters.push('Anakin');
console.log("array push", characters, "add to last");

characters.pop();
console.log("array pop", characters, "remove the last");

characters.unshift("C3PO");
console.log("array unshift", characters, "add to begin");

characters.shift("R2D2");
console.log("array shift", characters, "remove from begin");
console.log("array sort alpha", characters.sort());
console.log("includes",characters.includes("luke"));
