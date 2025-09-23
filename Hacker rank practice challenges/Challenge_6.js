const arr = [-5, -2, -10, -1]
;

let maxSum = -Infinity;
let currentSum = 0;
start = 0;
end = 0;
tempStart = 0;

// for(let i = 0; i < arr.length; i++){
//     if(currentSum + arr[i] < arr[i]){
//         currentSum = arr[i]
//         tempStart = i
//     }
//     else{
//         currentSum = currentSum + arr[i]
//     }

//     if(currentSum > maxSum){
//         maxSum = currentSum;
//         start = tempStart;
//         end= i;
//     }
// }


for(let i= 0; i < arr.length; i++){
    if( arr[i] > currentSum + arr[i]){
        currentSum = arr[i];
        tempStart = i;
    }
    else{
        currentSum = currentSum + arr[i];
    }
    if (maxSum < currentSum){
        maxSum = currentSum;
        start= tempStart;
        end = i;
    }
}

console.log("Max Sum:", maxSum);
console.log("Indices:", [start, end]);