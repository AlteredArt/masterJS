// es6 destructuring allows us to extract data from arrays or objects
// into seperate distinct variables
// destructing arrays
let c = [100, 200];
let a = c[0];
let b =c[1];
console.log(a,b);


let d = [200, 300];
let e = d[0];
let f =d[1];
console.log(e,f);

let g = [400, 500];
let [h, i] = g
console.log(h,i);

let fellowship = ["Waffles", "chloe", "jared"]
let [goodCat, badCat, dumbAss] = fellowship;
console.log(dumbAss, goodCat, badCat);

let j =[100,200,300,400,500]
let [k, ...l] = j
console.log(k, l)
