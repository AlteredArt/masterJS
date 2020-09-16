//Spread Operator in Arrays
let  a = [7,8,9];
let b=[6, ...a, 10];
console.log("spread in", b);



function print(...z){
  let a =[1,2,3, ...z]
  console.log("spread in", a)
}
print(4,5,6)
