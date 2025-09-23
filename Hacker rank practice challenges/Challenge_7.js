const nums = [2, 7, 11, 15];
const target = 9;


// function twoSum(nums, target){
//     const hashmap = new Map();
//     for(let i = 0; i< nums.length; i++){
//         const num = nums[i];
//         const complement = target - num;
//         if (hashmap.has(complement)){
            
//             return[complement, num];
//         }
//         hashmap.set(num,i);
//     }
//     return [];
// }

function twoSum(nums, target){
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const complement = target - num;
        if(map.has(complement)){
            return[complement, num];
        }
        map.set(num,i);
    }
    return [];
}

const result = twoSum(nums, target);
console.log(result);