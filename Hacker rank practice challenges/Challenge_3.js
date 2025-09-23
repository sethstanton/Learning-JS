let string = "this is a test this is only a test";
const wordCounts = {};
let  firstNoneRepeatingWord = "";

const splitWords = string.split(" "); // " " means i get the words not the characters

for(word of splitWords){
    wordCounts[word] = (wordCounts[word] || 0) + 1;
}

for(let word of splitWords){
    if(wordCounts[word] === 1){
        firstNoneRepeatingWord = word;
        break;
    }
}
console.log(firstNoneRepeatingWord);