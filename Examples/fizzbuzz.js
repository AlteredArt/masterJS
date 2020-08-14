// FizzBuzz
// divisible by 3 => fizz
// divisible by 5 => Buzz
// divisible by 3 & 5 => fizzBuzz
// not divisible => input
// not a number => 'message'

function fizzBuzz(n){
  if(typeof n !== 'number')
  return NaN;
  if((n % 3 === 0) && (n % 5 === 0))
  return "FizzBuzz";
  if (n % 3 ===0)
  return 'Fizz';
  if(n % 5 === 0)
  return "Buzz";
  return n;
}

const outputStr = fizzBuzz('allen')
console.log('ifloop', outputStr)
const outputInt = fizzBuzz(15)
console.log('ifloop', outputInt)

console.log('ifloop', 'not divisble', fizzBuzz(7))

function fizzbuzz(num){
  for (let i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('% by 3 & 5', 'fizzbuzz', i);
    } else if (i % 3 === 0){
      console.log('% by 3', 'fizz', i);
    } else if (i % 5 === 0){
      console.log('% by 5', 'buzz', i);
    } else {
      console.log('not % by 3 or 5', i);
    }
  }
}
fizzbuzz(16)