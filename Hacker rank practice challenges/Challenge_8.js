const nums = [1, 3, 2, 2, 4, 0];
const target = 4;

function twoSumUniquePairs(nums, target){
    let result = [];
    let seenPairs = new Set();
    let frequency = new Map();

    for(let num of nums){

        const complement = target - num;

        if(frequency.has(complement)){
            let first = Math.min(num, complement);
            let second = Math.max(num, complement);
            let key = `${first},${second}`;

            if(!seenPairs.has(key)){
                result.push([first,second]);
                seenPairs.add(key);
            }
        }
   
        frequency.set(num,(frequency.get(num)|| 0) + 1);
        
        
    }
    return result;
}

const result = twoSumUniquePairs(nums, target);
for( const pair of result){
    console.log(pair[0],pair[1]);
}
