let health = 40;

if (health <= 0) {

  console.log("You have fainted");

} else if (health < 50 && health != 0) {

  console.log("You are badly wounded")

} else if (health >= 50) {

  console.log("You are still healthy!")
}
//for
for( let i = 0; i < 5; i++){
    console.log(i);
}
//while
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
//for of
const spells = ["fire", "ice", "lightning"];
for(let spell of spells){
    console.log(`you cast ${spell}!`);
}
// loop challenges

for( let i = 1; i <= 5; i++){
    console.log(`Collected coin ${i}!`);
}

let a = 1;
while(a <= 5){
    console.log(`Collected coin ${a}!`)
    a++;
}

const coins = [1,2,3,4,5];
for(let coin of coins){
    console.log(`Collected coin ${coin}!`);
}

const goldInRooms = [10, 0, 5, 3, 7];
let total = 0;
for(let i = 0; i < goldInRooms.length; i++){
    total += goldInRooms[i];
    console.log(`You have collected a total of ${total} gold coins!`);
}

// for(let coin of goldInRooms){
//     total += coin;
//     console.log(`You have collected a total of ${total} gold coins!`);
// }

const warriors = [
  { name: "Aria", health: 80 },
  { name: "Borin", health: 45 },
  { name: "Cassia", health: 0 },
  { name: "Dorian", health: 60 }
];

for(let i = 0; i < warriors.length; i++){
    let currentWarrior = warriors[i];
    if(currentWarrior.health <= 0){
        console.log(`${currentWarrior.name} has fallen from battle.`);
    }
    else{
        console.log(`${currentWarrior.name} is still standing with ${ currentWarrior.health}`);
    }
}

for(let warrior of warriors){
    
    if(warrior.health === 0){
        console.log(`${warrior.name} has fallen from battle.`);
    }
    else{
        console.log(`${warrior.name} is still standing with ${ warrior.health} HP`);
    }
}

let inventory = [
    {name: "Potion" , quantity: 5},
    { name: "Sword", quantity: 1},
    {name: "Chest Armour", quantity: 1}
];


for( let item of inventory){
    console.log(`You have ${item.quantity} x ${item.name}`);
}

for(let i = 0; i < inventory.length; i++){
    let currentItem = inventory[i];
    console.log(`You have ${currentItem.name} x ${currentItem.quantity}`);
}

//for in loops

const playerStats = {
  strength: 10,
  agility: 8,
  luck: 5
};

for( let stat in playerStats){
    console.log(`Your ${stat} is ${playerStats[stat]}`);

}
