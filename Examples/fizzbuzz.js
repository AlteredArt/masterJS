// FizzBuzz
// divisible by 3 => fizz
// divisible by 5 => Buzz
// divisible by 3 & 5 => fizzBuzz
// not divisible => input
// not a number => 'message'
const output = fizzBuzz('allen')
console.log(output)
function fizzBuzz(input){
  if(typeof input !== 'number')
  return NaN;
  if((input % 3 === 0) && (input % 5 === 0))
  return "FizzBuzz";
  if (input % 3 ===0)
  return 'Fizz';
  if(input % 5 === 0)
  return "Buzz";
  return input;
}