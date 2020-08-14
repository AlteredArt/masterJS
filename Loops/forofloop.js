// for of loop
function reverse6(str){
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
  }
  console.log('for of loop', reverse6("Chloe is the best"))


  
  // this is the basic mapping of characters
function maxChar(str){
  const charMap = {};

  for (let char of str) {
      if (charMap[char]) {
          charMap[char]++;
      } else {
          charMap[char] =1;
      }
  }
 return charMap
}
console.log('map of characters', maxChar("Hello There"))