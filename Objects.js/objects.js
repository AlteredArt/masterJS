// done
// For in loops
// interating an object
const person = {
    name: 'Mosh',
    age: 30
  };
  
  for (let key in person)
  console.log(key, person[key]);
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