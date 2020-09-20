console.log('ES9')
//in es6 spread only worked with arrays now extends to objects
const array = [1,2,3,4]
function sum (a,b,c,d){
    return a + b + c + d;
}
console.log('spread array', sum(...array))

//Object spread operator
const animals = {
    tiger: 25,
    lion: 5,
    mokey: 2,
    bird: 48
}


function objectSpread(p1,p2,p3){
    console.log('tiger', p1)
    console.log('lion', p2)
    console.log('rest', p3)
}

const { tiger, lion, ...rest} = animals;
objectSpread(tiger, lion, rest)

// Async
const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    // throw Error;
    console.log('async', array[0])
    console.log('async', array[1])
    console.log('async', array[2])
    console.log('async', array[3])
})
.catch(err => console.log('uggh error', err))
//new in es9
.finally(() => console.log('extra data'))


//For Await of
const urlstype = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urlstype.map(url =>
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

const getDataForOf = url => {
    for (url of urlstype) {
        console.log('loop urls', url)
    }
}
getDataForOf()

const getData2 = async function(){
    const arrayOfPromises = urlstype.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log('get data 2',data)
    }
}
getData2()