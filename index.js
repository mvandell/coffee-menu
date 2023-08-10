const coffeeMenu = require("./coffee_data");
const drinks = coffeeMenu.map(element => element.name);
console.log(drinks);