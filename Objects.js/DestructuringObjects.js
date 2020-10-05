// Destructuring
console.log("Destructuring")
// Object Before
const character = {
    player: "Waffles",
    experience: 100,
    speed: true
}
    // const player = character.player
    // const experience = character.experience
    // const speed = character.speed
// Object After Destructuring
const { player, experience} = character
let {speed} = character

// another example of Destrcutring an Object
const alias = "Chloe";
const obj = {
    [alias]: "hello",
    [1+2]: "hi"
}

//another example 
const a = "simon"
const b = true
const c = {}
const newObj = {a,b,c}
console.log({newObj})