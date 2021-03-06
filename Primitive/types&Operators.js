// primates = value    objects = reference
// primates are copied by their value
// objects are copied by their reference
valueTypes = {
    number= 23,
    string= "String",
    boolean = true,
    // symbol = *,
    undefined = undefined,
    // null = null
}

referenceTypes = ['Objects', 'Functions', 'Arrays']

//operators
let x = 10;
let y = 3;
console.log(x - y);
console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
//incrementor and decrement
console.log(++x);
console.log(x++);
console.log('increments 1 every time its called', x);

//assignment operator
let m = 7;
m = m + 5;
m += 5;
console.log(m);

//comparison
let t = 1

//relational
console.log(t > 1);
console.log(t >= 1);

// equality strict over lose equality
console.log(t === 1);
console.log(t !== 1);

//ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver'
console.log(type)

//logical operator with non booleans
//true && true = true
// true || (or) false
// !not operator

//bitwise operators
