let incomingDamageAmount = 50;
let playerDefenseRating = 35;



function incomingDamageCalculation (incomingDamageAmount, playerDefenseRating) {
    
    let incomingDamage = incomingDamageAmount - playerDefenseRating;
    if(incomingDamage < 0){
        incomingDamage = 0
    }
    return incomingDamage;
}

// or you can do ^^^ in one line

let incomingDamage = Math.max(0, incomingDamageAmount - playerDefenseRating);



// part 2 
//declaration
function sayName(name){
    console.log(name)
};
//expression
let shoutName = function(name){
    
    console.log(name.toUpperCase())
};

//arrow functions

//normal
const greet = function(name){
    return `hewwo, ${name}!`;
};

//arrow

const greet1 = (name) => {
    return `hewwoo, ${name}!`;
};

// or 

const greet2 = (name) => `hewwoo, Mr ${name}!`;
//or
name => `hewwoo, Mr ${name}!`;

let double = (num) => num*2;





