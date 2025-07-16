function checkWeaponPower(power){
    if(power >= 80){
        return "Legendary!";
    } else if(power >= 50){
        return "Strong!";
    } else if(power > 0){
        return "Basic";
    } else {
        return "Broken";
    }
}

//function, loop, conditional challenge

const enemies = [
  { name: "Goblin", power: 25 },
  { name: "Orc", power: 55 },
  { name: "Dragon", power: 90 },
  { name: "Rat", power: 5 }
];


function assessThreat(enemies){
    for(let enemy of enemies){
        if(enemy.power > 70){
            console.log( `The ${enemy.name} is an Extreme Threat!`)
        } else if( enemy.power > 30){
            console.log(`The ${enemy.name} is a Moderate threat!`)
        } else {
            console.log(`The ${enemy.name} is a Low threat!`)
        }
        
    }
}
assessThreat(enemies)

const allies = [
  { name: "Lira", morale: 95 },
  { name: "Garen", morale: 62 },
  { name: "Nima", morale: 30 },
  { name: "Toru", morale: 10 }
];

function assessMorale(ally){
    if(ally.morale >= 80){
       return " Ready to lead!";
    } else if(ally.morale >= 40){
        return" Holding strong!";
    } else {
        return" Losing hope!";
    }
}

for(let ally of allies){
    const morale = assessMorale(ally);
    console.log(`${ally.name} is a ${morale}`);
};




