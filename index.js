const coffeeMenu = require("./coffee_data");
const drinks = coffeeMenu.map(element => element.name); //all drinks
console.log(drinks);

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5); //drinks for 5 or less
console.log(cheapDrinks);

const evenDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0); //even priced drinks
console.log(evenDrinks);

//total of all drinks

//seasonal drinks

//seasonal drinks "with imported beans"