const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'

// fetch(BASE_URL)
// .then(response => response.json())
// .then(result => {
//     result.forEach(dog => {
//     //result is an array of objects hence the interation
//     const dogList = document.createElement('ul')
//     const singleDog = document.createElement('li')
//     const dogBox = document.querySelector(`.dogs-container`)

//     const dogImage = document.createElement('img')
//     dogImage.src = dog.image
//     const dogName = document.createElement('h1')
//     dogName.innerText = dog.name
//     const dogAge = document.createElement('p')
//     dogAge.innerText = dog.age 
//     singleDog.append(dogImage, dogName, dogAge)
//     dogList.appendChild(singleDog)
//     dogBox.appendChild(dogList)
    
//     })
// })

const licks = document.querySelector(`#lick-button`)
const lickNumber = document.querySelector(`#lick-statement`)
licks.addEventListener('click', () => {
    let lickCount = parseInt(lickNumber.innerText) 
    lickNumber.innerText = lickCount + 1 

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  })
    })


})


//