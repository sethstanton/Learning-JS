// const john = [
//   { name: "Lira", level: 12 },
//   { name: "Toru", level: 8 },
//   { name: "Garen", level: 15 },
//   { name: "Nima", level: 5 }
// ];

// const levelFilter = john.filter(player => player.level > 10);

// const display = levelFilter.map(n => `${n.name} is a high level player`);

const playerss = [
  { name: "Lira", level: 12, role: "Mage" },
  { name: "Toru", level: 8, role: "Rogue" },
  { name: "Garen", level: 15, role: "Warrior" },
  { name: "Nima", level: 5, role: "Healer" },
  { name: "Cassia", level: 11, role: "Healer" }
];

const playerFilter =  playerss.filter(playerss => playerss.level > 10 && playerss.role != "Healer");

const present = playerFilter.map(n => `${n.name} the ${n.role} is a battle ready at ${n.level}`);

// one line version of the 2 lines above

const presents = playerss
    .filter(p => p.level > 10 && p.role != "Healer")


// .reduce 

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((sum, num) =>{
    return sum + num;
}, 0);

const levels = [12, 5, 8, 15, 3];

const highLevels = levels.reduce((count, level)=> {
    return level > 10 ? count + 1 : count;
}, 0);

console.log(highLevels);

const items = ["potion", "potion", "sword", "potion", "shield"];

const inventoryCount = items.reduce((inventory, item)=>{
    inventory[item] = (inventory[item] || 0) + 1;
    return inventory;
},{});

console.log(inventoryCount);


const playerList = [
  { name: "Lira", role: "Mage" },
  { name: "Toru", role: "Rogue" },
  { name: "Garen", role: "Warrior" },
  { name: "Nima", role: "Healer" },
  { name: "Cassia", role: "Healer" },
  { name: "Fenn", role: "Rogue" }
];

const playerCount = playerList.reduce((list, player)=>{
    const role = player.role;
    list[role] = (list[role] || 0 ) + 1;
    return list;
},{});

console.log(playerCount);