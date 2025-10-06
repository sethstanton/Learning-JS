let array = [5,3,15,2,4];

function FizzBuzz(first){
    
    for(let i = 0; i <= array.length; i ++){
        if(first = (array[i] % 3 === 0 && array[i] % 5 === 0)){
            console.log("FizzBuzz");

        } else if(first = array[i] % 3 === 0 ){
            console.log("Fizz");
            
        }else if(first = array[i] % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(i);
        }
    }
}
FizzBuzz(array);
