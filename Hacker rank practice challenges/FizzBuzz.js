let array = [5,3,15,2,4];

function FizzBuzz(array){
    
    for(let i = 0; i < array.length; i ++){
        if(array[i] % 3 === 0 && array[i] % 5 === 0){
            console.log("FizzBuzz");

        } else if( array[i] % 3 === 0 ){
            console.log("Fizz");
            
        }else if( array[i] % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(i + "." , array[i]);
        }
    }
}
FizzBuzz(array);
