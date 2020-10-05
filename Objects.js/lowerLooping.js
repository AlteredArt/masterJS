// interating an object
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log("let in", key, person[key]);