//Map , Filter, Sort, Reduce, Find, forEach
//simplified arrow map function
let points = [10,20,30];
points = points.map(e => e + 1);
console.log("map add one", points);

//Scaling maps challenge
let lengths = [3,7,5]
let multiple = 8
const scale = (multiple) => {
  return lengths.map(item => item * multiple);
};
console.log("map mul", scale(8))


// filter with shortened arrow function
let scores = [90, 85, 67, 72, 46, 99, 92];
let passing = scores.filter(item => item >= 70);
console.log("filter", passing)

// for each loop, convert all the names to lower case besides thorin
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];
  dwarves.forEach(function(item, index, array){
    if( item === "Thorin"){
      item= item.toUpperCase();
    }else{
      item= item.toLowerCase();
    }
      console.log("forEach", index, item);
  })

//Excercises
const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
  ];

// Array.prototype.filter()
    const fifteen = inventors.filter(inventor => inventor.born >= 1550 && inventor.born < 1600)
    console.log("filter", fifteen)
// Array.prototype.map()
      const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log("map", fullName)
// Array.prototype.sort()
    const ordered = inventors.sort((fp, sp) => fp.born > sp.born ? 1 : -1)
    console.log("sort",ordered)
// Array.prototype.reduce()
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.born);
      }, 0)
      console.log("reduce", totalYears)
// 5. Sort the inventors by years lived
      const oldest = inventors.sort((lg, ng) => {
        const lastGuy = lg.passed - lg.born;
        const nextGuy = ng.passed - ng.born;
        return  lastGuy > nextGuy ? -1 : 1;
        })
      console.log("sort", oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
        // const category = document.querySelector('.mw-category');
        // const links = [...category.querySelectorAll('a')];
        // const de = links
        //   .map(link => link.textContent)
        //   .filter(streetName => streetName.includes('de'))

// 7. sort Exercise
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
        const alpha = people.sort((lastone, nextone) => {
          const [alast, afirst] = lastone.split(', ')
          const [blast, bfirst] = nextone.split(', ')
            return alast > blast ? 1 : -1;
        })
        console.log("sort", alpha)

// 8. Reduce Exercise
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
        const sumup = data.reduce((obj, item) => {
          if (!obj[item]) {obj[item]=0;}
          obj[item]++
          return obj;
        }, {});
        console.log("reduce", sumup)
