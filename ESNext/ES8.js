console.log("Es8")

let string1 = "Waffles"
console.log(string1.padStart(10))
let string2 = 'chloe'
console.log(string2.padEnd(10))

const fun = (a,b,c,d,) => {
    console.log(a)
}

fun(1,2,3,4,)

//object.values, keys, entries
let obj = {
    username0: "Santa",
    username1: "elf",
    username2: "northpole"
}

console.log(obj.username0)
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

console.log(Object.values(obj))
console.log(Object.entries(obj))

Object.entries(obj).map(value => {
    console.log(value[1] + value[0].replace('username', ''))
})

//Promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    }).catch('oops');

// Async Await
const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
            ))
            console.log('users await', users)
            console.log('posts await', posts)
            console.log('albums await', albums)
    } catch(err) {
        console.log('try catch error', err)
    }
}

getData()