for(let i = 0; i < 3; i++){
    for(let j = 0; j < 2; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// const teamA = ["Lira", "Toru", "Garen"];
// const teamB = ["Cassia", "Lira", "Nima"];

// for(nameA of teamA){
//     for( nameB of teamB){
//         if( nameA === nameB){
//             console.log(`${nameA} appears in both teams`);
//         }
//     }
// }

// const teamA = [
//   { name: "Lira", class: "Mage" },
//   { name: "Toru", class: "Rogue" },
//   { name: "Garen", class: "Warrior" }
// ];

// const teamB = [
//   { name: "Cassia", class: "Healer" },
//   { name: "Lira", class: "Mage" },
//   { name: "Nima", class: "Ranger" }
// ];


// for( nameA of teamA){
//     for(nameB of teamB){
//         if(nameA.name === nameB.name){
//             console.log(`${nameA.name} is on both teams`);
//         }
//     }
// }
// const teamA = [
//   { name: "Lira", class: "Mage" },
//   { name: "Toru", class: "Rogue" },
//   { name: "Garen", class: "Warrior" }
// ];

// const teamB = [
//   { name: "Cassia", class: "Healer" },
//   { name: "Lira", class: "Mage" },
//   { name: "Nima", class: "Rogue" }
// ];


// for ( classA of teamA ){
//     for( classB of teamB){
//         if(classA.class === classB.class){
//             console.log(`${classA.name} from team A shares a class with ${classB.name} from team B ${classA.class}`);
//         }
//     }
// }

const teams = [
  {
    name: "Team A",
    members: [
      { name: "Lira", class: "Mage" },
      { name: "Toru", class: "Rogue" },
      { name: "Garen", class: "Warrior" }
    ]
  },
  {
    name: "Team B",
    members: [
      { name: "Cassia", class: "Healer" },
      { name: "Lira", class: "Mage" },
      { name: "Nima", class: "Rogue" }
    ]
  }
];

for(let i = 0; i < teams.length; i++){
    for( let j = i + 1 ; j < teams.length; j++){

        let teamA = teams[i];
        let teamB = teams[j];

        for(let classA of teamA.members){
            for (let classB of teamB.members){
                if (classA.class === classB.class){
                    console.log(`${classA.name} from ${teamA.name} shares a class with ${classB.name} from ${teamB.name}: ${classA.class}`);
                }
            }
        }  
    }
}

const players = [
  {
    name: "Lira",
    stats: { health: 90, mana: 30 }
  },
  {
    name: "Toru",
    stats: { health: 65, mana: 40 }
  },
  {
    name: "Garen",
    stats: { health: 100, mana: 10 }
  }
];

for (let i = 0; i < players.length; i++){
  for(let j = i + 1; j < players.length; j++){

    let playerA = players[i];
    let playerB = players[j];

    console.log(`${playerA.name} has ${playerA.stats.health} health and ${playerA.stats.mana} mana`);

  }
}

const players1 = [
  { name: "Lira", level: 12 },
  { name: "Toru", level: 8 },
  { name: "Garen", level: 15 },
  { name: "Nima", level: 5 }
];

for(let i = 0; i < players1.length; i++){
  let playerA = players1[i];

  if(playerA.level > 10){
    console.log(`${playerA.name} is a high level player at level ${playerA.level}`);
  }
}

for( let player of players1){
  if(player.level > 10){
    console.log(`${player.name} is a high level player at level ${player.level}`);
  }
}
const highLevelPlayers = players1.forEach(player =>{
  if(player.level > 10){
    console.log(`${player.name} is a high level player at level ${player.level}`);
  }
})




