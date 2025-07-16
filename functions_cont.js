//higher order functions

const names = ["alex", "bobby", "chris"];

const capitalised1 = names.map(name => name[0].toUpperCase() + name.slice(1));

//mini challenge

const players = ["luna", "kai", "robin"];

const bigPlayers = players.map(
    n => n[0].toUpperCase() + n.slice(1) + "!"
);
console.log(bigPlayers)
//

const scores = [45, 82, 77, 91, 38];

const above50 = scores.filter(
    n => n >= 50
);

//mini challenge

const inventory1 = [
  "health potion",
  "rock",
  "magic scroll",
  "apple",
  "magic ring"
];
const magicItems = inventory1.filter(
    n => n.includes("magic")
);

const tasks = ["stretch", "drink water", "check messages"];

const orders = tasks.forEach(
    n =>{
        console.log(`Don't forget to: ${n}`);
    });

// mini challenge

const enemies = ["goblin", "slime", "troll"];

enemies.forEach( n => {
    console.log(`You've encountered a ${n}!`);
});

//High order functions Grand Challenge

const inventory = [
  "rusty sword",
  "potion",
  "old boot",
  "potion",
  "magic stone",
  "broken shield"
];
const filterItems = inventory.filter( n =>
    !n.includes("rusty") &&
    !n.includes("old") &&
    !n.includes("broken")
 );
 


const capitalised = filterItems.map(n => n[0].toUpperCase() + n.slice(1));

capitalised.forEach( n => {
    console.log(`You are carrying: ${n}`);
});


//functionising this ^^

const filterInventory = (inventory) => {
const filterItems = inventory.filter( n =>
    !n.includes("rusty") &&
    !n.includes("old") &&
    !n.includes("broken")
 );
 


const capitalised = filterItems.map(n => n[0].toUpperCase() + n.slice(1));

capitalised.forEach( n => {
    console.log(`You are carrying: ${n}`);
});
};

filterInventory(["rusty sword",
  "potion",
  "old boot",
  "potion",
  "magic stone",
  "broken shield"])