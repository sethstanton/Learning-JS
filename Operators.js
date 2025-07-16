//condition ? valueIfTrue : valueIfFalse

//const status = health > 0 ? "Alive" : "KO";

let gold = 120;

const wealthStatus = gold <= 100 ? "Broke" : "Rich"

console.log(wealthStatus);


const inventory = [
    {name: "Potion", quantity: 3},
    {name: "Elixir", quantity: 0},
    {name: "Antidote", quantity: 2}
];

for( let inv of inventory){
    const potionAvailability = inv.quantity > 0 ? `${inv.name} is available` :`Your out of ${inv.name}s!`
    console.log(potionAvailability)
    const elixirAvailability = inv.quantity === 0 ? `${inv.name} is out of stock!` : `${inv.name} is available`
    console.log(elixirAvailability)
};