const array = [1,2,3,41, 26]

const double = []
const newArray = array.forEach((num) => {
    double.push(num*2);
})

console.log("foreach", double)

//map
const mapArray = array.map(num => num*2)
console.log("map", mapArray)

//filter
const filterArray = array.filter(num => num <5 || num > 40)
console.log("filter", filterArray)

// reduce
const reduceArray = array.reduce((acc, num) => {
    return acc + num 
}, 0)

console.group("reduce", reduceArray)