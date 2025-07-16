var videogamecharacter = {
    name: "Character",
    health: 100,
    items: ["health Potion", "Great Sword", "Escape Totem"],
    takeDamage(incomingDamage){
        if(incomingDamage > 0) {
            this.health -= incomingDamage;
            // return this.health
        }
    },
    addItem(item){
        this.items.push(item);

    }

}