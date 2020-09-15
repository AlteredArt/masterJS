console.log("if & else if statements")
// if else if
function hour(num){
  if (num >= 6 && num < 12)
    console.log('Good Morning');
  else if(num >= 12 && num < 18)
    console.log('Good Afternoon')
  else
    console.log('Good Night')
  }
hour(13)

// if else if
function greet (name) {
  if (name === "Waffles" || name === "Chloe") {
    alert("hello Kitty!")
  } else {
    alert("hmm I don't know you")
  }
}
greet("Chloe")

// if else if
const hello = (firstName, lastName) => {
  if (firstName === "Waffles" && lastName === "Chloe") {
    alert("hello Kitty!")
  } else {
    alert("hmm I don't know you")
  }
}
hello("Waffles", "Chloe")