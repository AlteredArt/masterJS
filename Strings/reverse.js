// done
//reverse a string with a for loop
function reverse(str){
  if (!str || str.length < 2 || typeof str !== "string"){
    return 'Hmm thats not good';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
console.log('reversed array', backwards);
  return backwards.join('')
}
console.log('for loop',reverse("hi my name is waffles"));

// for of loop
function reverse6(str){
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
console.log('for of loop', reverse6("Chloe is the best"))

//simpler syntax es6
function reverse2(str) {
  return str.split('').reverse().join('')
}
console.log('es6', reverse2('you are a punk'));

//es6 syntax using arrow functions
const reverse3 = str => str.split('').reverse().join('');
console.log('es6 arrow func', reverse3('es6 syntax'));

//using the spread operator
const reverse4 = str => [...str].reverse().join('');
console.log('spread', reverse4('es6 syntax'));

// using a function 2 with a arr variable
function reverse5(str) {
  const arr = str.split('')
  arr.reverse()
  return arr.join('');
}
console.log('split,rev,join', reverse5('hello all'))

// using reduce
function reverse7(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
console.log('reduce', reverse7('meow meow meow'))