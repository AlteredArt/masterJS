//parameter
function greet(firstName, lastName){
  console.log(`Hello ${firstName}`);
  console.log('Hello ' + firstName + ' ' + lastName);
  alert( `Hello ${firstName} , ${lastName}`)
}
//argument
greet('John', 'Smith');


//function declaration
function square(num){
  return num * num;
}
console.log(square(2))


//function expression (annon func)
var sayBye = function(){
  console.log("Say Bye");
}
sayBye();