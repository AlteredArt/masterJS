// return the char most used in a string
// What is the most common character in a string?
// Does string A have the same characters as stringB?
// does the given string have any repeated characters?

// this is the basic mapping of characters
function maxChar(str){
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] =1;
        }
    }
   return charMap
}
console.log('map of characters', maxChar("Hello There"))

// function expanded to find most used character
function maxChars(str){
    const charMapping = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMapping[char]) {
            charMapping[char]++;
        } else {
            charMapping[char] =1;
        }
    }
    for (let char in charMapping) {
        if(charMapping[char]> max){
            max = charMapping[char];
            maxChar = char
        }
    }
    return maxChar;
}
console.log('most used char', maxChars("Hello There"))