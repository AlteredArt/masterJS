//ES7
const square = (x) => x ** 2
console.log(square(8))

const cube = (x) => x ** 3
console.log(cube(9))


console.log("Es8")

let string1 = "Waffles"
console.log(string1.padStart(10))
let string2 = 'chloe'
console.log(string2.padEnd(10))

const fun = (a, b, c, d,) => {
    console.log(a)
}

fun(1, 2, 3, 4,)


//ES10
//TrimStart & Trim End
userEmail1 = "          waffles@gmail.com"
userEmail2 = "waffles@gmail.com              "
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())