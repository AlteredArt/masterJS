//reverse a string
function reverse(str){
  if (!str || str.length < 2 || typeof str !== "string"){
    return 'Hmm thats not good';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
console.log(backwards);
  return backwards.join('')
}

reverse("hi my name is waffles")

//simpler syntax
function reverse2(str) {
  return str.split('').reverse().join('')
}

console.log(reverse2('you are a punk'))

//es6 syntax
const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('es6 syntax'))

//using the spread operator
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('es6 syntax'))
