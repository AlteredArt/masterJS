// classes and function can be declared the same and work the same with hoisting
// use declarations
// console.log(number)      not defined
sayHello();
// function declaration these are hosited
function sayHello(){}
// function expression / not hoisted
const sayGoodbye = function(){};
const number = 1;


// class declaration
class Circle {}
// class expression
const Square = class {};