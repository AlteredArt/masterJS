//Some, Every, Find, FindIndex, Sort
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Some
  const isAdult = people.some(person => {
      const currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19
  })
  console.log("some", {isAdult})
//Every
  const allAdults = people.every(person => ((new Date())
      .getFullYear()) - person.year >= 19);

  console.log("every", {allAdults})
  // Find
  const comment = comments.find(comment => (comment.id === 823423))
  console.log("find", {comment})
  
//Find Index
  const index = comments.findIndex(comment => comment.id === 823423)
  console.table(comments)    
  console.log("find index", {index})
  comments.splice(index, 1)
  console.table("find index", comments) 
 
//Sort
var fruits = ["Bannana", "Orange", "Apple", "Mango"]
console.log("sort", fruits.sort());
