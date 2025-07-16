const allies = [
  { name: "Lira", morale: 95, status: "active" },
  { name: "Garen", morale: 62, status: "active" },
  { name: "Nima", morale: 30, status: "resting" },
  { name: "Toru", morale: 10, status: "wounded" }
];

function assessAlly(ally){
    if(ally.morale >= 80 && ally.status ==="active"){
        return "is an Inspiring leader"
    } else if( ally.morale >= 40 && ally.status === "active"){
        return "is a Reliable backup"
    } else if( ally.status === "resting"){
        return "Needs rest"
    } else {
        return "is Out of commission"
    }
}

for(let ally of allies){
    const morale = assessAlly(ally);
    console.log(`${ally.name} ${morale} `);
}