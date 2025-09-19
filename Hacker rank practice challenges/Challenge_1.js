let string = "Apple"
let maxCount = 0;
const counts = {};
let maxChar = "";

// for(character of string){
//     counts[character] = (counts[character] || 0) + 1;
// }

// for (let char of Object.keys(counts)){
//     if(counts[char] > maxCount){
//         maxCount = counts[char]
//         maxChar = char
//     }
// }


//a better/more efficient way


for (let char of string){
    counts[char] = (counts[char] || 0) + 1;
    if(counts[char] > maxCount){
        maxCount = counts[char]
        maxChar = char;
    }
}

console.log(counts)