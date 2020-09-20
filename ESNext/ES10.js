console.log("ES10")

//Flat
const array = [1,2,[3,4,[5]]]
console.log("flat", array.flat(2))
console.log("spread",...array)
console.log("array", array)

//Flat Map
jurrasicPark = [[1,2], 4, 5 [6,7[8,9]]]
const jurrasicParkChaos = jurrasicPark.flatMap(creature => creature + [3])

//TrimStart & Trim End
userEmail1 = "          waffles@gmail.com"
userEmail2 = "waffles@gmail.com              "
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())

//Form Entries
userProfile = [['commanderTom', 23], ['private johnson', 40]]
console.log(Object.fromEntries(userProfile))


//try / catch
try { 
    '4'+bob
} catch {
    console.log("you messed up")
}