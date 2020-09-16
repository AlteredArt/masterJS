//For Loops, ForOf, While, DoWhile, Forin
//For Loop
var todos = [
    "brush teeth!",
    "feed Waffles!",
    "Pet Chloe",
    "Check the Mail."
]

for (var i=0; i < todos.length; i ++){
    console.log(todos[i], i)
}

//For Each
todos.forEach(function(todo, i){
    console.log(todo, i)
})

//While
var counterOne = 10
while(counterOne>0){
    counterOne--
    console.log("while",counterOne)
}

//Do While
var counterTwo = 0
do {
    counterTwo++
    console.log("do while", counterTwo)
} while (counterTwo < 10)

//while loops
let z = 0;
while (z <= 5) {
  if (z % 2 !== 0 ) console.log("while", z);
  z++;
}

//do while
let t = 9;
do {
  if ( t % 2 !== 0) console.log("do while", t);
  t++
}while (t<= 5)

// break
let n = 0;
while (n <= 10) {
  if (n === 5) break;
  console.log("break", n);
  n++;
}

// continue
let m = 0;
while (m <= 10) {
  if (m % 2 === 0) {
  m++;
  continue;
}
console.log("continue", m);
m++;
}

//For Loop on a 2 Dimension Array
let twoD = [[1,2,3,4,5,6,7],
            [8, 10, 5 ,7, 3, 22, 6, 42],
            [123, 54, 12, 11, 9, 15]];

            let rows = twoD.length;
            for(let i=0; i<rows; i++){
              let items =twoD[i].length;
              console.log("two D array & length", i, items)
              for(let t=0; t<items; t++){
                  console.log("2D item", twoD[i][t]);
              }
            }
//ForOf Loop
function reverse6(str){
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
  }
  console.log('for of reversed', reverse6("Chloe is the best"))

// For in loops
// interating an object
const person = {
    name: 'Mosh',
    age: 30
  };
  
  for (let key in person)
  console.log("let in", key, person[key]);
  
  // in an Array
  const colors = ['red', 'blue', 'green'];
  for (let index in colors)
  console.log("let in", index, colors[index])
  
  
  // for of ideal for arrays
  for (let color of colors)
    console.log("let of", color);

//Switch Case
let role = 'guest';

switch(role) {
  case 'guest':
  console.log("switch", 'Guest User');
  break;

  case 'moderator':
  console.log('Moderator User');
  break;

  default:
  console.log('Unknown User')
}
