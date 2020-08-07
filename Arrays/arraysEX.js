// Array of arrays show length of all arrays, the array item, length of array
let twoD = [[1,2,3,4,5,6,7],
            [8, 10, 5 ,7, 3, 22, 6, 42],
            [123, 54, 12, 11, 9, 15]];

            let rows = twoD.length;
            for(let i=0; i<rows; i++){
              let items =twoD[i].length;
              for(let t=0; t<items; t++){
console.log("length of all arrays",twoD.length,"array item",twoD[i][t],"array length", items);
              }
            }

// for each loop, convert all the names to lower case besides thorin
console.log("Use for Each loop to capitalize Thorin")
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];

dwarves.forEach(function(item, index, array){
if(item === "Thorin"){
  item= item.toUpperCase();
}else{
  item= item.toLowerCase();
}
  console.log(index, item);
})
