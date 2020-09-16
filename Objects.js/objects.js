// For in loops
// object literal objects are made of properties
var dog = {"name":"Woody",type:"dog"};
var cat = {"name":"Waffles", type: "cat"};
console.log(dog);
console.log(cat);

var petNames = ["Woody", "Bob"];
console.log(petNames);
var pets = [dog, cat];
console.log(pets)

// add to an array
pets.push({"name": "Chloe", type:"cat"})
console.log(pets[2])

// spread
const dog1 = {firstName: "buckley", breed: "lab Mix"}
const dog2 = {firstName: "Ginny", breed: "American Fox Hound"}
const newObject = {...dog1}
console.log(newObject)


// add to an object
cat.age = 2;
dog["age"] = 12;
console.log(pets);

pets[0].age = 14;
pets[2]["age"] = 6;
pets[1].hungry = true;
console.log(pets);

// nested loops
let bigHero = {characters: [
  {name:"hiro", voice:"Ryan Potter"},
  {name:"Baymax", voice:"Scott Adsit"},
  {name:"Fred", voice:"T.J. Miller"}
]};
console.log(bigHero)

let chars = bigHero.characters
// let chars = bigHero['characters']
  for(let i = 0, len=chars.length; i<len; i++){
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]["voice"]);
  }

let person = {
  name: "Josh",
  age: 30
};
//dont notation
person.name = "John";
//bracket notation
let selection = "name";
person[selection]= 'Mary';
console.log(person.name)
// interating an object
const person2 = {
    name: 'Mosh',
    age: 30
  };
  
  for (let key in person2)
  console.log(key, person2[key]);
// variable of data has and object with an array
var data = {
    name: "jared",
    last: "matta",
    other_name: "lion",
    online_places : [
        {website : "hhtp://jared.com"},
        {school : "flatiron.com"},
        {facebook : "jared.facebook.com"},
        {twitter : "jared.twitter.com"},
        {linkedIn : "jared.linkedin.com"},
    ],
    goals: ["work out", "eat less"],
    shout: function() {
        console.log("AHHHH")
    }
};

console.log('data object', data)
console.log('name', data.name)
console.log('online_places 1', data.online_places[1])
console.log("goals 1", data.goals[1])
console.log('shout function', data.shout())
// change name
data.name = 'Rico'
console.log('new name', data.name)
// delete something only works on the object
delete(data.other_name)
// manipulating arrays in objects using splice
// deletes the first object in the array
        // data.online_places.splice(0,1)

// replace to array with splice
data.online_places.splice(0,1, {"exampleKey": "exampleData"})
// push to array with push
data.online_places.push({"lastKey" : "lastText"})
// complex looping
for (let i = 0; i <= data.online_places.length; i++){
   for(key in data.online_places[i]){
       console.log(i,  data.online_places[i])
   }
}


// loop through objects must be an object
var data2 = {
    name: "jared",
    last: "matta",
    other_name: "lion",
    online_places : {
        website : "hhtp://jared.com",
        school : "flatiron.com",
        facebook : "jared.facebook.com",
        twitter : "jared.twitter.com",
        linkedIn : "jared.linkedin.com"
    }
};

    for (key in data2.online_places){
        console.log('keys of data 2',key)
    }    
//An Array of Objects
var list = [
    {
        username: "waffles",
        password: "Waffles1"
    },
    {
        username: "Chloe",
        password: "Chloe2"
    }
]

console.log("list 0", list[0].username)