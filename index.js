const coffeeMenu = require("./coffee_data");
const drinks = coffeeMenu.map(element => element.name);
console.log(drinks);

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);