let string = "This, this; is a test! Only a TEST...";

string = string.toLowerCase().replace(/[^\w\s]/g, "");
const wordCounts = {};
let  firstNoneRepeatingWord = "";

const splitWords = string.split(" ");

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